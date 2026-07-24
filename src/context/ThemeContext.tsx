"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeMode = "mixed" | "light" | "dark";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("mixed");

  useEffect(() => {
    // Safely sync with localStorage after mount
    const savedTheme = (localStorage.getItem("technolz-theme") as ThemeMode) || "mixed";
    setThemeState(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem("technolz-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
