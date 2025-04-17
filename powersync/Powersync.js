import '@azure/core-asynciterator-polyfill';
import 'react-native-polyfill-globals/auto';
import { createContext, useContext } from 'react';
import { AppSchema } from './AppSchema';
import { wrapPowerSyncWithKysely } from '@powersync/kysely-driver';
import { SupabaseConnector } from './SupabaseConnector';
import { PowerSyncDatabase } from '@powersync/react-native';

export class System {

  constructor() {
    this.supabaseConnector = new SupabaseConnector();
    this.powersync = new PowerSyncDatabase({
        schema: AppSchema,
        database: {
          dbFilename: 'sqlite.db'
        }
      });
    this.db = wrapPowerSyncWithKysely(this.powersync);
  }

  async init() {
    console.log('Initializing system');
    try {
      await this.powersync.init();
      await this.powersync.connect(this.supabaseConnector);
    } catch (error) {
      console.error('Error initializing system:', error);
    }
  }
}

export const system = new System();
export const SystemContext = createContext(system);
export const useSystem = () => useContext(SystemContext);