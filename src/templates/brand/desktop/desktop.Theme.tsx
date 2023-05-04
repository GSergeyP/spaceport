import { createTheme } from "@mui/material";
import { greyShades, fonts, otherColors } from "../../../assest/styleConst";

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
          height: "671px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          width: "100%",
          "&.h4": {
            position: "relative",
            top: "187px",
            left: "75px",
            display: "inline-block",
            color: greyShades[100]
          },
          "&.content": {
            position: "relative",
            top: "130px",
            width: "590px",
            height: "508px",
            overflowY: "hidden"
          },
          "&.blurTop": {
            position: "relative",
            top: "-400px",
            width: "590px",
            height: "70px",
            zIndex: "100",
            background: greyShades[900],
            opacity: "0.85",
            filter: "blur(2px)",
            transform:" matrix(1, 0, 0, -1, 0, 0)"
          },
          "&.blurBottom": {
            position: "relative",
            top: "5px",
            width: "590px",
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
          top: "256px",
          left: "74px",
          width: "159px",
          height: "158px",
          fill: "none"
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "208px",
          left: "76px",
          width: "213px",
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

export { DesktopTheme }