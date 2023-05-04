import { ThemeProvider, Container, Typography, SvgIcon } from "@mui/material";
import { DesktopTheme } from "./desktop.Theme";
import { svgIconData, typographyData } from "../stages.Const";

const Desktop = () => {

  return(
    <ThemeProvider theme={DesktopTheme}>
     <Container fixed disableGutters>
      <Typography variant="h1" component="h1" className="h1">Этапы работы</Typography>
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

export default Desktop;