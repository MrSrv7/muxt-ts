import { PaletteOptions } from "@mui/material/styles";
import { appColors } from "../constants";

const darkTheme: PaletteOptions = {
  mode: "dark",
  background: {
    default: appColors.dark,
  },
  
  text: {
    primary: appColors.light,
  },
  primary: {
    main: appColors.dark,
    contrastText: appColors.light,
  },
  secondary: {
    main: appColors.secondary.dark,
    contrastText: appColors.secondary.light,
  },
};

export default darkTheme;
