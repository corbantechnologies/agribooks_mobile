import { PowerSyncContext } from '@powersync/react-native';
import { useMemo } from 'react';

import { useSystem } from './Powersync';

export const PowerSyncProvider = ({ children }) => {
  const { powersync } = useSystem();

  const db = useMemo(() => {
    return powersync;
  }, []);

  return <PowerSyncContext.Provider value={db}>{children}</PowerSyncContext.Provider>;
};