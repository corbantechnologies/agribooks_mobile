import '@azure/core-asynciterator-polyfill';
import 'react-native-polyfill-globals/auto';
import { createContext, useContext } from 'react';
import { AppSchema } from './AppSchema';
import { wrapPowerSyncWithKysely } from '@powersync/kysely-driver';
import { SupabaseConnector } from './SupabaseConnector';

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
    await this.powersync.init();
    await this.powersync.connect(this.supabaseConnector);
  }
}

export const system = new System();
export const SystemContext = createContext(system);
export const useSystem = () => useContext(SystemContext);