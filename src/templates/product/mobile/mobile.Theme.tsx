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
          height: "433px",
          overflow: "hidden",
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
            top: "44px",
            left: "72px",
            display: "inline-block",
            color: greyShades[100]
          },
          "&.content": {
            position: "relative",
            top: "42px",
            left: "8px",
            width: "100%",
            height: "275px",
            overflow: "hidden",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "36px",
          left: "178px",
          width: "141px",
          height: "30px",
          fill: "none"
        },
      },
    },
  },
});

export { MobileTheme }