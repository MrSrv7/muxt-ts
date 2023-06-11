import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useScreenSize } from "@/hooks/useScreenSize";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const BaseHeader = () => {
  const { isMobile } = useScreenSize();
  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!isMobile && <div style={{ flex: 1 }} />}
        <Typography
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
          }}
        >
          MUXT - TS
        </Typography>
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  );
};

export default BaseHeader;
