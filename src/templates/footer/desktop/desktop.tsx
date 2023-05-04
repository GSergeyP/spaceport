import { ThemeProvider, Container, Link, Typography } from "@mui/material";
import { DesktopTheme } from "./desktop.Theme";
import { linkData } from "../footer.Const";

const Desktop = () => {

  return(
    <ThemeProvider theme={DesktopTheme}>
     <Container fixed disableGutters>
       {
         linkData.map((item, index) =>
          <Link key={index} href={item.url} variant="h4">{item.title}</Link>
         )
       }
       <br/>
       <Typography variant="h5" component="h5" className="h5">
          <Typography variant="h5" component="span" className="span">ООО «Хитинвест» </Typography> 
          by Spaceport 2022
       </Typography>
     </Container>
    </ThemeProvider>
  )
}

export default Desktop;