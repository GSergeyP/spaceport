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
    MuiToolbar: {
      styleOverrides: {
        root: {
          margin: "0 auto",
          width: "480px",
          height: "107px"
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "-28px",
          left: "199px",
          color: greyShades[100]
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "27px",
          left: "-114px",
          width: "426px",
          height: "45px",
          padding: "0 10px",
          border: `1px solid ${greyShades[700]}`,
          boxShadow: "none"
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "434px",
          color: greyShades[500],
          "& fieldset": {
            border: 'none',
            height: "39px",
          },
          input: {
            position: "relative",
            top: "-6px",
            "&::placeholder": {
              fontSize: "13.5px",
              color: greyShades[500],
            }
          }
        },
      },
    },
  },
});

export { MobileTheme }