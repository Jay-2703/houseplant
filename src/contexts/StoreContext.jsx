
import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer, initialState } from '../reducers/cartReducer';

const StoreContext = createContext();
export function useStore() {
  return useContext(StoreContext);
}

/**
 * The Context Provider component.
 * It sets up the useReducer hook and passes the state and dispatch down.
 */
export function StoreProvider({ children }) {
  // Use the imported reducer and initialState
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
