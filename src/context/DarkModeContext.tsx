import React, { createContext, useState } from 'react';
import { DarkModeContextType } from '../@types/darkMode';

export const DarkModeContext = createContext<DarkModeContextType | false>(
  false
);

const DarkModeContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  if (darkMode) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }

  return (
    <DarkModeContext.Provider value={{ toggleMode, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
