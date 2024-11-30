import React, { createContext, useState, useContext } from 'react';

// Create Theme Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const theme = isDarkMode
    ? {
        background: '#121212',
        text: '#FFFFFF',
        buttonBackground: '#FFFFFF',
        buttonText: '#000000', 
      }
    : {
        background: '#FFFFFF',
        text: '#000000',
        buttonBackground: '#000000', 
        buttonText: '#FFFFFF', // White text on purple buttons
      };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
