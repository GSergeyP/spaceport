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
          height: "420px"
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          "&.h3": {
            position: "relative",
            top: "27px",
            left: "29px",
            display: "inline-block",
            fontSize: "16.2px",
            color: greyShades[100]
          },
          "&.span": {
            position: "relative",
            top: "42px",
            left: "19px",
            display: "block",
            width: "445px",
            heigth: "200px",
            lineHeight: "150%",
            textAlign: "center",
            color: greyShades[100]
          }
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.SvgIcon0": {
            position: "relative",
            top: "32px",
            left: "48px",
            width: "380px",
            height: "54px",
            strokeWidth: "0.4"
          },
          "&.SvgIcon1": {
           position: "relative",
            top: "100px",
            left: "-364px",
            width: "87px",
            height: "69.53px"
          },
          "&.SvgIcon2": {
            position: "relative",
            top: "56px",
            left: "197px",
            width: "73px",
            height: "37.63px"
          },
          "&.SvgIcon3": {
            position: "relative",
             top: "48px",
             left: "273px",
             width: "39.49px",
             height: "39.48px"
          },
          "&.SvgIcon4": {
            position: "relative",
            top: "48px",
            left: "273px",
            width: "39.49px",
            height: "39.49px"
          },
          "&.SvgIcon5": {
            position: "relative",
            top: "48px",
            left: "273px",
            width: "39.49px",
            height: "39.48px"
          },
          "&.SvgIcon6": {
            position: "relative",
            top: "49px",
            left: "48px",
            width: "380px",
            height: "54px",
            strokeWidth: "0.4"
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "70px",
          left: "16px",
          width: "448px",
          height: "35px",
          textTransform: "none",
          fontFamily: fonts.h4.fontFamily,
          fontSize: fonts.h4.fontSize,
          fontWeight: fonts.h4.fontWeight,
          lineHeight: fonts.h4.lineHeight, 
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