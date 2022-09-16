import React, { useContext, createContext } from 'react';
import { io } from 'socket.io-client';

export const WSContext = createContext(null);

export const WSContextProvider = ({ children }) => {
  const socket = io('http://localhost:3000');

  const values = React.useMemo(() => ({ socket }), []);

  return <WSContext.Provider value={values}>{children}</WSContext.Provider>;
};

export function useWS() {
  const context = useContext(WSContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useWS;
