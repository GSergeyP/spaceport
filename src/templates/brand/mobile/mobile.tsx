import { useEffect, useRef, useState } from "react";
import { ThemeProvider, Box, Button, Container, Grid, SvgIcon, Typography } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import { svgIconData } from "../brand.Const";
import BrendConnect from "../brand.Connect";

const Mobile = () => {
  const [data, setData] = useState<Object[]>([]),
        [startPosition, setStartPosition] = useState<number>(0),
        [moveDirection, setMoveDirection] = useState<boolean>(true);

  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    BrendConnect()
      .then((resp) => { 
        setData(resp.data.items); 
      })
      .catch(() => setData([]));
  }, []);

  useEffect(() =>{
    const element = ref.current;

    if(element && data.length > 0) {

      const clientHeight = element.clientHeight,
            scrollHeight = element.scrollHeight;

      const scrollBottom = () => {
        element.scrollTop = startPosition;
      }

      const scrollTop = () => {
        element.scrollTop = startPosition;
      }
      setTimeout(() => {
      if(moveDirection) {
        scrollBottom();
        setStartPosition(startPosition + 3); 
        if(startPosition >= scrollHeight - clientHeight) setMoveDirection(false);
      }
      else{
        scrollTop();
        setStartPosition(startPosition - 3);
        if(startPosition <= 0) {
          setMoveDirection(true);
        }
      }
    }, 10)
    }
  }, [startPosition, moveDirection, data.length])

  return(
    <ThemeProvider theme={MobileTheme}>
     <Container fixed disableGutters>
      {
        svgIconData.map((item, index) => 
          <SvgIcon key={index} viewBox={item.viewBox}>
            {item.path}
          </SvgIcon>
        )
      }
      <Typography variant="h4" component="h4" className="h4">Официальный дилер мировых брендов-производителей.</Typography>
      <Button variant="contained" disableRipple>Стать продавцом на Stoking</Button>
       <Typography component="div" className="content" ref={ref}>
          <Box component="div">
           <Grid container sx={{gap: "17px"}} justifyContent="center">
             {
              data.map((item: any, index) =>
                <Grid item key={index} sx={{width: "126.7px"}}>
                  {
                    <img 
                      src={item.thumbnail.path} 
                      style={{
                        width: "126.7px", 
                        height: "80.5px", 
                        boxShadow: "0px 0px 15px rgba(77, 77, 77, 0.15)",
                        borderRadius: "8px"
                      }} 
                      alt=""
                    />
                  }
                </Grid>
              )
             }
            </Grid>
          </Box>*
       </Typography>
       <Typography component="div" className="blurTop">&nbsp;</Typography>
       <Typography component="div" className="blurBottom">&nbsp;</Typography>
     </Container>
    </ThemeProvider>
  )
}

export default Mobile;