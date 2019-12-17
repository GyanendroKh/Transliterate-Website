import React from 'react';
import MainContextProvider from './MainContext';
import APIContextProvider from './APIContext';

const ContextProvider = ({ children }) => {
  return (
    <MainContextProvider>
      <APIContextProvider>{children}</APIContextProvider>
    </MainContextProvider>
  );
};

export default ContextProvider;
