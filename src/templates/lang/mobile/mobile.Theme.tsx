import { createTheme } from "@mui/material";
import { greyShades, fonts } from "../../../assest/styleConst";

const MobileTheme = createTheme({
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
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "100%",
          height: "70px",
          overflow: "hidden",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          display: "inline-block",
          position: "relative",
          top: "25px",
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
            top: "6px",
            left: "14px",
            fill: "none"
          },
          "&.line": {
            position: "relative",
            top: "-16px",
            left: "20px",
            width: "200px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "0px",
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
          top: "10px",
          paddingRight: "2px",
          textAlign: "right",
          color: greyShades[100]
        },
      },
    },
  },
});

export { MobileTheme }