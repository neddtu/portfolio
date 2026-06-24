import { createContext, useContext } from "react";

// Shared theme context + hook. Kept separate from the provider component
// so the provider file only exports components (React Fast Refresh friendly).
export const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
