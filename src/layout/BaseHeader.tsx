import ThemeSwitcher from "@/components/ThemeSwitcher";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const BaseHeader = () => {
  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }} />
        <Typography
          sx={{
            flexGrow: 1,
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
