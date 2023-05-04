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
          height: "425px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          borderBottom: `1px solid ${greyShades[650]}`
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          width: "100%",
          "&.h4": {
            position: "relative",
            top: "133px",
            left: "79px",
            display: "inline-block",
            color: greyShades[100],
          },
          "&.content": {
            position: "relative",
            top: "42px",
            left: "8px",
            width: "585px",
            height: "260px",
            overflow: "hidden",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "140px",
          left: "75px",
          width: "193px",
          height: "36px",
          fill: "none"
        },
      },
    },
  },
});

export { DesktopTheme }