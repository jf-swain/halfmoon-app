import React, { useContext } from 'react';
import { DarkModeContext } from '../../../../context/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

interface DarkModeContextType {
  darkMode: boolean;
  toggleMode: () => void;
}

function DarkModeButton() {
  const { darkMode, toggleMode } = useContext(
    DarkModeContext
  ) as DarkModeContextType;

  return (
    <button
      onClick={toggleMode}
      className="app__dark-mode-btn icon level-right"
    >
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        color={darkMode ? 'white' : 'dark'}
      />
    </button>
  );
}

export default DarkModeButton;
