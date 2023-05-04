import { createTheme } from "@mui/material";
import { greyShades, otherColors, fonts } from "../../../assest/styleConst";

const DesktopTheme = createTheme({
  palette: {
    primary: {
      main: greyShades[900],
      contrastText: greyShades[100],
    },
    secondary: {
      main: otherColors[50],
      contrastText: greyShades[900],
    },
  },
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
          margin: "16px auto",
          width: "1168px",
          height: "49px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: "-3px",
          marginLeft: "31px",
          width: "105px",
          height: "35px",
          boxShadow: "none",
          textTransform: "capitalize",
          "&:hover": {
            boxShadow: "none",
            background: otherColors[50]
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          marginTop: "-3px",
          marginLeft: "26px",
          width: "494px",
          height: "35px",
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
            height: "39px"
          },
          input: {
            position: "relative",
            top: "-10px",
            left: "-23px",
            "&::placeholder": {
              fontSize: "11.5px",
            }
          }
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          position: "relative",
          top: "-3px",
          left: "17px",
          background: "none",
          color: greyShades[500],
          fontSize: "14px",
          fontWeight: 600
        },
      },
    },
  },
});

export { DesktopTheme }