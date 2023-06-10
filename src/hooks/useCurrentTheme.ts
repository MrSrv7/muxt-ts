import { useState, useEffect } from "react";
import { appColors } from "../constants";
import { useThemeContext } from "../contexts/ThemeContext";

const useCurrentTheme = () => {
  const { themeMode } = useThemeContext();
  const [currentThemeBg, setCurrentThemeBg] = useState<string>(
    appColors.light
  );
  const [currentThemeTextColor, setCurrentThemeTextColor] = useState<string>(
    appColors.dark
  );
  const assignThemeColors = () => {
    switch (themeMode) {
      case "light":
        setCurrentThemeBg(appColors.dark);
        setCurrentThemeTextColor(appColors.light);
        break;
      case "dark":
        setCurrentThemeBg(appColors.light);
        setCurrentThemeTextColor(appColors.dark);
        break;
      default:
    }
  };
  useEffect(() => {
    assignThemeColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeMode]);

  return { currentThemeBg, currentThemeTextColor };
};

export default useCurrentTheme;
