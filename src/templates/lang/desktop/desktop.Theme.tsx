import { createTheme } from "@mui/material";
import { greyShades, otherColors, fonts } from "../../../assest/styleConst";

const DesktopTheme = createTheme({
  palette: {
    primary: {
      main: greyShades[900],
      contrastText: greyShades[100],
    },
    secondary: {
      main: otherColors[50],
      contrastText: greyShades[900],
    },
  },
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
          top: "14px",
          width: "100%",
          height: "49px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          overflow: "hidden"
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          display: "inline-block",
          position: "relative",
          top: "0px",
          left: "4px",
          fontFamily: fonts.h4.fontFamily,
          fontSize: fonts.h4.fontSize,
          fontWeight: fonts.h4.fontWeight,
          lineHeight: fonts.h4.lineHeight,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.house": {
            position: "relative",
            top: "7px",
            left: "14px",
            fill: "none"
          },
          "&.line": {
            position: "relative",
            top: "30px",
            left: "-175px",
            width: "200px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "1px",
          left: "-3px",
          textDecoration: "none",
          color: greyShades[500],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          position: "relative",
          top: "-15px",
          left: "200px"
        },
      },
    },
  },
});

export { DesktopTheme }