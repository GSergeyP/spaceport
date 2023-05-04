import { useEffect, useRef, useState } from "react";
import { ThemeProvider, Container, SvgIcon, Typography } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import { svgIconData, imgData } from "../product.Const";

const Mobile = () => {
 
  const [rolling, setRolling] = useState<boolean>(false);
  
  const imgRef = useRef<Array<HTMLImageElement | null>>([]),
        divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    imgRef.current = imgRef.current.slice(0, imgData.length);
    /////////////////////////////////////////////////////////
   
    const onScroll = () => {

      const element: HTMLDivElement | any = divRef.current,
            posTop = element.getBoundingClientRect().top;

      if(posTop < window.innerHeight) setRolling(true)
    };

    /////////////////////////////////////////////////////////
    if(!rolling) {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }

  }, [rolling]);

  useEffect(() => {

    if(rolling) {
   
      const element: Array<HTMLImageElement> | any = [];
         
      let coordX: number = 50;
  
      const moveCard = () => {
        if (coordX === 500) {
          clearInterval(time);
          setRolling(false);
        }
        else {
          coordX++;
          for(let i = 0; i < imgRef.current.length; i++) {
            if(imgRef.current[i]) element[i] = imgRef.current[i];
            if(coordX <=490 - (105 * i)) element[i].style.left = 483 - coordX + 'px';
          }
        }
      }
      let time = setInterval(moveCard, 1);  
    }
  }, [rolling]);

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
      <Typography variant="h4" component="h4" className="h4">На нашем сайте, в наличии с актуальными ценами.</Typography>
      <Typography component="div" ref={divRef} className="content">
        {
          imgData.map((item, index) => 
            (index < 4)
            &&
            <img 
              key={index} 
              ref={el => imgRef.current[index] = el}  
              src={item.url} 
              alt="" 
              style={{
                position: "absolute", 
                top: "0px",
                left: "580px",
                width: "165px", 
                height: "285px"
              }} 
            />,
          )
        }
       </Typography>
     </Container>
    </ThemeProvider>
  )
}

export default Mobile;