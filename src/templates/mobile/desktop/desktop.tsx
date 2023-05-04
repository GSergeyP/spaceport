import React from "react";
import { ThemeProvider, Container, Typography } from "@mui/material";
import { DesktopTheme } from "./desktop.Theme";
import { typographyData } from "../mobile.Const";

const Desktop = () => {

  const img = require('../../../common/img/mobile.png');

  return(
    <ThemeProvider theme={DesktopTheme}>
     <Container fixed disableGutters>
      {
        typographyData.map((items, index1) =>
          <Typography key={index1} variant="h3" component="div">
            {
              items.title.split(' ').map((item, index2) => 
                <React.Fragment key={`${index1}`+ index2}>
                  {
                    item.match(/Stoking/) 
                    ? <b>{item}</b> 
                    : item 
                  }
                    &nbsp;
                </React.Fragment>
              )
            }
          </Typography>
        )
      }
      <img src={img} alt="" style={{position: "relative", top: "-297px", left: "885px"}} />
     </Container>
    </ThemeProvider>
  )
}

export default Desktop;