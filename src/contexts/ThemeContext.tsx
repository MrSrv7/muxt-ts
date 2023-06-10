import { createContext, useContext, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
} from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";
import lightTheme from "../theme/lightTheme";
import darkTheme from "../theme/darkTheme";

type RNode = React.ReactNode | string

const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: RNode }) => {
  const isDarkOS = useMediaQuery(DARK_SCHEME_QUERY);

  const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
    "themeMode",
    isDarkOS ? "light" : "dark"
  );

  useEffect(() => {}, [themeMode]);

  const toggleTheme = () => {
    switch (themeMode) {
      case "light":
        setThemeMode("dark");
        break;
      case "dark":
        setThemeMode("light");
        break;
      default:
    }
  };

  const appTheme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: false,
        },
      },
    },
    palette: themeMode === "light" ? lightTheme : darkTheme,
  });

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={appTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { useThemeContext, ThemeProvider };
