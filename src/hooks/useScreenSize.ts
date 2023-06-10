import { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

type ScreenSize = {
  height: number;
  width: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
};

export const useScreenSize = () => {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(
    theme.breakpoints.between("xs", "sm")
  );
  const isTablet: boolean = useMediaQuery(
    theme.breakpoints.between("sm", "md")
  );
  const isDesktop: boolean = useMediaQuery(
    theme.breakpoints.between("md", "lg")
  );
  const isLarge: boolean = useMediaQuery(theme.breakpoints.up("lg"));

  const [screenSize, setScreenSize] = useState<ScreenSize | {}>({
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
  });

  useEffect(() => {
    setScreenSize({
      height: window.screen.height,
      width: window.screen.width,
      isMobile,
      isTablet,
      isDesktop,
      isLarge,
    });
  }, [isDesktop, isMobile, isTablet, isLarge]);

  return { ...screenSize };
};
