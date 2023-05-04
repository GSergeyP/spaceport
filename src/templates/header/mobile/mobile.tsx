import { Paper, TextField, ThemeProvider, Toolbar, Typography } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import DensityMediumTwoToneIcon from "@mui/icons-material/DensityMediumTwoTone";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { greyShades } from "../../../assest/styleConst";

const Mobile = () => {

  return(
    <ThemeProvider theme={MobileTheme}>
      <Toolbar disableGutters>
        <Typography variant="h2" component="h2">Stoking</Typography>
        <DensityMediumTwoToneIcon 
          sx={{
            position: "relative", 
            top: "-28px", 
            left: "345px",
            width: "50px",
            heigth: "20px",
            cursor: "pointer",
            fill: greyShades[500]
          }}
        />
        <br/>
        <Paper component="form" elevation={0} autoComplete="off">
          <TextField type="text" placeholder="Например: шаровый кран"  />
          <SearchSharpIcon sx={{position: "relative",  top: "-45px", left: "396px", fill: greyShades[700], cursor: "pointer"}} />
        </Paper>
      </Toolbar>
    </ThemeProvider>
  )
}

export default Mobile;