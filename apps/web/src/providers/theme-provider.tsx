'use client';

import { createContext, useEffect, useState } from 'react';

// Creating a context for the theme
export const ThemeContext = createContext({
  theme: '',
  setTheme: (theme: string) => {},
});

// Defining the ThemeProvider component
export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<string>('');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme || '');
  }, []);

  useEffect(() => {
    const themeValue = localStorage.getItem('theme');
    if (themeValue !== '' && themeValue !== 'dark') {
      localStorage.setItem('theme', '');
    }
    document.documentElement.className = themeValue || '';
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
