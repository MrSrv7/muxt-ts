import { PaletteOptions } from "@mui/material/styles";
import { appColors } from "../constants";

const lightTheme: PaletteOptions = {
  mode: "light",
  background: {
    default: appColors.light,
  },
  text: {
    primary: appColors.dark,
  },
  primary: {
    main: appColors.light,
    contrastText: appColors.dark,
  },
  secondary: {
    main: appColors.secondary.light,
    contrastText: appColors.secondary.dark,
  }
};

export default lightTheme;
