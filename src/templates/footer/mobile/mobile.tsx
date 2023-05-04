import { ThemeProvider, Container, Link, SvgIcon } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import { svgIconLinkData } from "../footer.Const";


const Mobile = () => {

  return(
    <ThemeProvider theme={MobileTheme}>
     <Container fixed disableGutters>
       {
         svgIconLinkData.map((item, index) => 
         <Link key={index} href={item.url} variant="h5">
           <SvgIcon viewBox={item.viewBox}>
             {item.path}
           </SvgIcon>
           <br/>
           {item.title}
         </Link>
         )
       }
     </Container>
    </ThemeProvider>
  )
}

export default Mobile;