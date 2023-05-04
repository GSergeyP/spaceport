import { Button, Container, SvgIcon, ThemeProvider, Typography } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import { svgIconData } from "../banner.Const";


const Mobile = () => {
  return(
    <ThemeProvider theme={MobileTheme}>
     <Container fixed disableGutters>
      <Typography variant="h3" component="h3" className="h3">
        Stoking — маркетплейс промышленного оборудования
      </Typography>
      <Typography variant="h4" component="span" className="span">
        Владеете складом промышленного оборудования или производите его?
        <br/>
        Начни продавать уже сейчас. 
      </Typography>
      <br/>
      {
        svgIconData.map((item, index) =>
          <SvgIcon key={index} className={'SvgIcon' + index} viewBox={item.viewBox}>
            {item.path}
          </SvgIcon>
        )
      }
      <br/>
      <Button variant="contained" disableRipple>Стать продавцом на Stoking</Button>
     </Container>
    </ThemeProvider>
  )
}

export default Mobile;