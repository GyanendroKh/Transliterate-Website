import React from 'react';
import MainContextProvider from './MainContext';

const ContextProvider = ({ children }) => {
  return <MainContextProvider>{children}</MainContextProvider>;
};

export default ContextProvider;
