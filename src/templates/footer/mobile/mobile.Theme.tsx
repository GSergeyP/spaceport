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
          height: "59px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-around"
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: { 
          position: "relative",
          top: "4px",
          textDecoration: "none",
          textAlign: "center",
          color: greyShades[100]
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: { 
          position: "relative",
          top: "4px",
          fill: "none"
        },
      },
    },
  },
});

export { MobileTheme }