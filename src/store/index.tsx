import React, { useReducer, PropsWithChildren, FC } from 'react';
import { Store } from '../types';
import { reducer } from './reducer';
import { setDispatcher } from './actionCreators';

export const initialState = {
  user: { id: 0, email: '', name: '' },
};

export const StoreContext = React.createContext<Store>(initialState);

export const StoreProvider: FC<PropsWithChildren<{}>> = ({
  children,
}: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  setDispatcher(dispatch);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};
