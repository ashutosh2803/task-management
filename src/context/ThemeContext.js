import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("presetTheme");
    const initialValue = JSON.parse(saved);
    return initialValue || 1;
  });
  useEffect(() => {
    localStorage.setItem("presetTheme", theme);
  }, [theme]);
  const toggleTheme = (option) => {
    if (option === 1) {
      setTheme(2);
    }
    if (option === 2) {
      setTheme(1);
    }
  };
  const values = { theme, setTheme, toggleTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
