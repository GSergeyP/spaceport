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
          position: "relative",
          width: "100%",
          height: "850px",
          overflow: "hidden"
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          "&.h2": {
            position: "relative",
            top: "12px",
            left: "172px",
            display: "inline-block",
            fontSize: "20px",
            fontWeight: 600,
            color: greyShades[100]
          },
          "&.h3": {
            marginBottom: "201px"
          },
          "&.div1": {
            display: "flex",
            flexDirection: "column"
          },
          "&.div2": {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            color: greyShades[100]
          },
          "&.div3": {
            position: "relative",
            top: "-700px",
            margin: "0 auto",
            width: "400px",
            textAlign: "center"
          },
          "&.p": {
            position: "relative",
            top: "-189px",
            lineHeight: "1.5"
          }
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.circle": {
            position: "relative",
            top: "54px",
            left: "212px",
            marginBottom: "195px",
            width: "57px",
            height: "57px",
          },
          "&.line": {
            position: "relative",
            top: "2px",
            left: "202px",
            width: "80px",
            marginTop: "8px",
            transform: "rotate(90deg)"
          }
        },
      },
    },
  },
});

export { MobileTheme }