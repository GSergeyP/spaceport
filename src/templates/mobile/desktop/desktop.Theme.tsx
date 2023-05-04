import { createTheme } from "@mui/material";
import { greyShades, fonts } from "../../../assest/styleConst";

const DesktopTheme = createTheme({
  typography: {
    h1: fonts.h1,
    h2: fonts.h2,
    h3: fonts.h3,
    h4: fonts.h4,
    h5: fonts.h5
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          position: "relative",
          width: "100%",
          height: "331px",
          marginTop: "53px",
          background: greyShades[800]
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          position: "relative",
          top: "46px",
          left: "72px",
          display: "block",
          marginBottom: "24px", 
          width: "711px",
          wordWrap: "break-word"
        },
      },
    },
  },
});

export { DesktopTheme }