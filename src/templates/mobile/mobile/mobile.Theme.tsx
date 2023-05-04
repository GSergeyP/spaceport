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
          height: "334px",
          background: greyShades[800]
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { 
          position: "relative",
          top: "40px",
          left: "15px",
          marginBottom: "19px", 
          width: "456px",
          fontSize: "13.4px",
          lineHeight: "22px"
        },
      },
    },
  },
});

export { MobileTheme }