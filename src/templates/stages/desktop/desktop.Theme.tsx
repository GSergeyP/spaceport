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
          height: "300px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          "&.h1": {
            position: "relative",
            top: "12px",
            left: "512px",
            display: "inline-block",
            color: greyShades[100]
          },
          "&.div1": {
            position: "relative",
            top: "58px",
            width: "890px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between"
          },
          "&.div2": {
            position: "relative",
            top: "46px",
            width: "1180px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            gap: "60px",
            color: greyShades[100]
          },
          "&.div3": {
            width: "350px",
            textAlign: "center"
          },
          "&.p": {
            position: "relative",
            top: "10px",
            lineHeight: "1.5"
          }
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.circle": {
            width: "59px",
            height: "58px",
          },
          "&.line": {
            position: "relative",
            top: "14px",
            width: "200px",
          }
        },
      },
    },
  },
});

export { DesktopTheme }