'use client';

import { createContext, useReducer, useContext, useMemo, Dispatch, ReactNode } from 'react';
import { initial_state, historic_reducer } from '@repo/patterns/reducers/historic-reducer';
import { HistoricActions, HistoricState } from '@repo/patterns/reducers/historic-reducer/interfaces';

interface HistoricContextProps {
  historic: HistoricState;
  set_historic: Dispatch<HistoricActions>;
}

const Context = createContext<HistoricContextProps | undefined>(undefined);

const useHistoric = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useHistoric must be used within a HistoricProvider');
  }
  return context;
};

interface HistoricProviderProps {
  children: ReactNode;
}

export const HistoricContext: React.FC<HistoricProviderProps> = ({ children }) => {
  const [historic, set_historic] = useReducer(historic_reducer, initial_state);

  const value = useMemo(() => ({ historic, set_historic }), [historic]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default HistoricContext;
export { useHistoric }