import { createTheme } from "@mui/material";
import { greyShades, otherColors, fonts } from "../../../assest/styleConst";

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
          height: "500px"
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          "&.h1": {
            position: "relative",
            top: "45px",
            left: "256px",
            display: "inline-block",
            color: greyShades[100]
          },
          "&.span": {
            position: "relative",
            top: "65px",
            left: "303px",
            display: "block",
            width: "590px",
            heigth: "200px",
            whiteSpace: "normal",
            textAlign: "center",
            color: greyShades[100]
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "84px",
          left: "495px",
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.SvgIcon0": {
            position: "relative",
            top: "102px",
            left: "319px",
            width: "589px",
            height: "92px",
            strokeWidth: "0.4"
          },
          "&.SvgIcon1": {
           position: "relative",
            top: "172px",
            left: "-358px",
            width: "127px",
            height: "101.5px"
          },
          "&.SvgIcon2": {
            position: "relative",
             top: "169px",
             left: "-166px",
             width: "119.9px",
             height: "58.26px"
          },
          "&.SvgIcon3": {
            position: "relative",
             top: "158px",
             left: "-19px",
             width: "51px",
             height: "52px"
          },
          "&.SvgIcon4": {
            position: "relative",
             top: "158px",
             left: "-19.5px",
             width: "50px",
             height: "52px"
          },
          "&.SvgIcon5": {
            position: "relative",
             top: "158px",
             left: "-19px",
             width: "50px",
             height: "52px"
          },
          "&.SvgIcon6": {
            position: "relative",
            top: "161px",
            left: "319px",
            width: "589px",
            height: "92px",
            strokeWidth: "0.4"
          },
        },
      },
    },
  },
});

export { DesktopTheme }