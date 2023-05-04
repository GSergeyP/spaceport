import { ThemeProvider, Button, Container, Typography, SvgIcon } from "@mui/material";
import { DesktopTheme } from "./desktop.Theme";
import { svgIconData } from "../banner.Const";

const Desktop = () => {
  return(
    <ThemeProvider theme={DesktopTheme}>
     <Container fixed disableGutters>
      <Typography variant="h1" component="h1" className="h1">
        Stoking — маркетплейс промышленного оборудования
      </Typography>
      <Typography variant="h3" component="span" className="span">
        Владеете складом промышленного оборудования или производите его?
        Начни продавать уже сейчас. 
      </Typography>
      <Button variant="contained" disableRipple>Стать продавцом на Stoking</Button>
      <br/>
      {
        svgIconData.map((item, index) =>
          <SvgIcon key={index} className={'SvgIcon' + index} viewBox={item.viewBox}>
            {item.path}
          </SvgIcon>
        )
      }
     </Container>
    </ThemeProvider>
  )
}

export default Desktop;