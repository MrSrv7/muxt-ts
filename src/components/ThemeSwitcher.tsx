import React from "react";
import { RiMoonClearLine, RiSunFill } from "react-icons/ri";

import { useThemeContext } from "@/contexts/ThemeContext";
import { TooltipIconBtn } from "./TooltipIconBtn";

const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useThemeContext();
  const isDark = themeMode === "dark";
  return (
    <div>
      <TooltipIconBtn
        title={isDark ? "Light Mode" : "Dark Mode"}
        icon={isDark ? <RiSunFill /> : <RiMoonClearLine />}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;
