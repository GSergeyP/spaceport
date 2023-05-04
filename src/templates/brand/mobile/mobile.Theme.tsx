import { createTheme } from "@mui/material";
import { greyShades, otherColors, fonts } from "../../../assest/styleConst";

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
          position: "relative",
          width: "100%",
          height: "621px",
          overflow: "hidden",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          width: "100%",
          "&.h4": {
            position: "relative",
            top: "-25px",
            left: "50px",
            display: "inline-block",
            color: greyShades[100]
          },
          "&.content": {
            position: "relative",
            top: "30px",
            margin: "0 auto",
            width: "448px",
            height: "390px",
            overflowY: "hidden"
          },
          "&.blurTop": {
            position: "relative",
            top: "-362px",
            width: "100%",
            height: "70px",
            zIndex: "100",
            background: greyShades[900],
            opacity: "0.85",
            filter: "blur(2px)",
            transform:" matrix(1, 0, 0, -1, 0, 0)"
          },
          "&.blurBottom": {
            position: "relative",
            top: "-107px",
            width: "100%",
            height: "70px",
            zIndex: "100",
            background: greyShades[900],
            opacity: "0.85",
            filter: "blur(2px)",
            transform:" matrix(1, 0, 0, -1, 0, 0)"
          }
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "8px",
          left: "194px",
          width: "129px",
          height: "108px",
          fill: "none"
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "-4px",
          left: "16px",
          width: "448px",
          height: "35px",
          textTransform: "none",
          fontFamily: fonts.h5.fontFamily,
          fontSize: fonts.h5.fontSize,
          fontWeight: fonts.h5.fontWeight,
          lineHeight: fonts.h5.lineHeight, 
          background: otherColors[50],
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            background: otherColors[50]
          },
        },
      },
    },
  },
});

export { MobileTheme }