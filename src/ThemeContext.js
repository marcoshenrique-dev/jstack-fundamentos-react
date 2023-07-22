import React, {createContext, useState} from 'react';

export const ThemeContext = createContext('dark');

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark');

  function handleToogleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      onToogleTheme: handleToogleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );

}

