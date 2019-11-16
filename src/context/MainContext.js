import React, { createContext, useState } from 'react';

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [title, setTitle] = useState('Home');
  const [sideBarState, setSideBarState] = useState(true);
  return (
    <MainContext.Provider
      value={{
        title,
        setTitle,
        sideBarState,
        setSideBarState
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
