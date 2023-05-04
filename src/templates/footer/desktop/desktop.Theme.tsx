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
          height: "126px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          "&.h5": {
            position: "relative",
            top: "48px",
            left: "494px",
            display: "inline-block",
            fontWeight: 400,
            color: greyShades[100]
          },
          "&.span": {
            borderBottom: `1px solid ${greyShades[100]}`,
            fontWeight: 400,
            color: greyShades[100]
          }
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { 
          position: "relative",
          top: "30px",
          left: "131px",
          marginRight: "49px",
          textDecoration: "none",
          color: greyShades[450]
        },
      },
    },
  },
});

export { DesktopTheme }