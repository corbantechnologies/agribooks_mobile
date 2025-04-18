import {
    UpdateType,
  } from '@powersync/react-native';
  
  import { createClient } from '@supabase/supabase-js';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import 'react-native-url-polyfill/auto';
  
  /// Postgres Response codes that we cannot recover from by retrying.
  const FATAL_RESPONSE_CODES = [
    // Class 22 — Data Exception
    // Examples include data type mismatch.
    new RegExp('^22...$'),
    // Class 23 — Integrity Constraint Violation.
    // Examples include NOT NULL, FOREIGN KEY and UNIQUE violations.
    new RegExp('^23...$'),
    // INSUFFICIENT PRIVILEGE - typically a row-level security violation
    new RegExp('^42501$'),
  ];
  
  const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
  const powersyncUrl = process.env.EXPO_PUBLIC_POWERSYNC_URL;
  
  export class SupabaseConnector {  
    constructor() {
      this.client = createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          storage: AsyncStorage,
        },
      });
    }
  
    async login(username, password) {
      const { error } = await this.client.auth.signInWithPassword({
        email: username,
        password: password,
      });
  
      if (error) {
        throw error;
      }
    }
  
    async fetchCredentials() {
      const {
        data: { session },
        error,
      } = await this.client.auth.getSession();
  
      if (!session || error) {
        throw new Error(`Could not fetch Supabase credentials: ${error}`);
      }
  
      console.debug('session expires at', session.expires_at);
  
      return {
        cliennt: this.client,
        endpoint: powersyncUrl,
        token: session.access_token ?? '',
        expiresAt: session.expires_at ? new Date(session.expires_at * 1000) : undefined,
        userID: session.user.id,
      };
    }
  
    async uploadData(database) {
      const transaction = await database.getNextCrudTransaction();
  
      if (!transaction) {
        return;
      }
  
      let lastOp = null;
      try {
        // Note: If transactional consistency is important, use database functions
        // or edge functions to process the entire transaction in a single call.
        for (const op of transaction.crud) {
          lastOp = op;
          const table = this.client.from(op.table);
          let result = null;
          switch (op.op) {
            case UpdateType.PUT:
              // eslint-disable-next-line no-case-declarations
              const record = { ...op.opData, id: op.id };
              result = await table.upsert(record);
              break;
            case UpdateType.PATCH:
              result = await table.update(op.opData).eq('id', op.id);
              break;
            case UpdateType.DELETE:
              result = await table.delete().eq('id', op.id);
              break;
          }
  
          if (result.error) {
            throw new Error(`Could not ${op.op} data to Supabase error: ${JSON.stringify(result)}`);
          }
        }
  
        await transaction.complete();
      } catch (ex) {
        console.debug(ex);
        if (typeof ex.code == 'string' && FATAL_RESPONSE_CODES.some((regex) => regex.test(ex.code))) {
          /**
           * Instead of blocking the queue with these errors,
           * discard the (rest of the) transaction.
           *
           * Note that these errors typically indicate a bug in the application.
           * If protecting against data loss is important, save the failing records
           * elsewhere instead of discarding, and/or notify the user.
           */
          console.error(`Data upload error - discarding ${lastOp}`, ex);
          await transaction.complete();
        } else {
          // Error may be retryable - e.g. network error or temporary server error.
          // Throwing an error here causes this call to be retried after a delay.
          throw ex;
        }
      }
    }
  }