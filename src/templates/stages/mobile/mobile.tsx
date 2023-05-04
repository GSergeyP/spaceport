import { Container, SvgIcon, ThemeProvider, Typography } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import { svgIconData, typographyData } from "../stages.Const";


const Mobile = () => {
  return(
    <ThemeProvider theme={MobileTheme}>
     <Container fixed disableGutters>
      <Typography variant="h2" component="h2" className="h2">Этапы работы</Typography>
      <br/>
      <Typography component="div" className="div1">
      {
        svgIconData.map((item, index) =>
          <SvgIcon 
            key={index} 
            viewBox={item.viewBox} 
            className={
              index % 2 === 0 ? "circle" : "line"
            }
          >
            {item.path}
          </SvgIcon>
        )
      }
      </Typography>
      <br/>
      <Typography component="div" className="div2">
      {
        typographyData.map((item, index) =>
          <Typography key={index} component="div" className="div3">
            <Typography  variant="h3" component="h3" className="h3">{item.title}</Typography>
            <Typography  variant="h4" component="p" className="p">{item.msg}</Typography>
          </Typography>
        )
      }
      </Typography>
     </Container>
    </ThemeProvider>
  )
}

export default Mobile;