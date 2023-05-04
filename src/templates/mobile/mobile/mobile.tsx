import React from "react";
import { Container, ThemeProvider, Typography } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import { typographyData } from "../mobile.Const";


const Mobile = () => {
  return(
    <ThemeProvider theme={MobileTheme}>
     <Container fixed disableGutters>
      {
        typographyData.map((items, index1) =>
          <Typography key={index1} variant="h4" component="div">
            {
              items.title.split(' ').map((item, index2) => 
                <React.Fragment key={`${index1}`+ index2}>
                  {
                    item.match(/Stoking/) 
                    ? <b>{item}</b> 
                    : item 
                  }
                    &ensp;
                </React.Fragment>
              )
            }
          </Typography>
        )
      }
     </Container>
    </ThemeProvider>
  )
}

export default Mobile;