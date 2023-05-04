import { ThemeProvider, Button, Chip, Paper, SvgIcon, TextField, Toolbar, Typography, ButtonGroup } from "@mui/material";
import { DesktopTheme } from "./desktop.Theme";
import { greyShades } from "../../../assest/styleConst";
import DesktopModule from "./desktop.Module";
import { svgIconData } from "./desktop.Const";


const Desktop = () => {
  return(
    <ThemeProvider theme={DesktopTheme}>
      <Toolbar disableGutters>
        <Typography variant="h2" component="span" color="primary.contrastText">
          Stoking
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<DesktopModule.DensityMediumTwoToneIcon />} 
          color="secondary"
          sx={{"&:hover": {boxShadow: "none" }}}
        >
          <Typography variant="h5" component="span" color="primary">
            Каталог
          </Typography>
        </Button>
        <Paper component="form" elevation={0} autoComplete="off">
          <DesktopModule.SearchSharpIcon sx={{position: "relative",  top: "7px", left: "463px", fill: greyShades[850], cursor: "pointer"}} />
          <TextField type="text" placeholder="Поиск по товарам"  />
        </Paper>
        <Chip icon={<DesktopModule.CallIcon sx={{width: "28px", height: "28px", stroke: greyShades[300], fill: "none"}} />} label="8 (800) 500-90-52" />
        <ButtonGroup variant="text" sx={{position: "relative", top: "1px", left: "47px"}}>
          {
            svgIconData.map((item, index) =>
              <SvgIcon key={index} sx={{marginRight: "21px", width: "26px", height: "25px", stroke: greyShades[300], fill: "none"}}>
                {item.path}
              </SvgIcon>
            )
          }
        </ButtonGroup>
      </Toolbar>
    </ThemeProvider>
  )
}

export default Desktop;