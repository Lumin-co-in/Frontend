import React from 'react';
import { useContext, useEffect, useState } from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }, [isMenuOpen]);

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen: setIsMenuOpen,
        authStatus,
        setAuthStatus: setAuthStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
