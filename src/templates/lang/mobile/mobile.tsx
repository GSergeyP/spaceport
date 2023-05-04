import { Container, Breadcrumbs, Select, Link, SvgIcon, ThemeProvider, Typography, MenuItem } from "@mui/material";
import { MobileTheme } from "./mobile.Theme";
import { nativeSelect, breadcrumbsData } from "../lang.Const";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Mobile = () => {

  return(
    <ThemeProvider theme={MobileTheme}>
     <Container fixed disableGutters>
      <Breadcrumbs separator="&ndash;" aria-label="breadcrumb">
        {
          breadcrumbsData.map((item, index) => 
            (item.path) 
            ? <Link key={index} href={item.url}><SvgIcon className="house">{item.path}</SvgIcon></Link>
            : <Link key={index}>{item.title}</Link>
          )
        }
      </Breadcrumbs>
      <Typography variant="h4" component="span">
        <Select 
          defaultValue="0"
          sx={{
            position: "relative",
            top: "3px",
            "& fieldset": {
              border: "none",
            },
          }}
          MenuProps={{
            disableScrollLock: true,
          }}
          IconComponent = {(props) => (
            <ExpandMoreIcon
              {...props}
            />
          )}
        >
          {
            nativeSelect.map((item, index) => 
              <MenuItem key={index} value={index} sx={{height: "30px"}}>
                <img src={item.url} height="16px" alt="" />
                &nbsp;
                {item.title}
              </MenuItem>
            )
          }
        </Select>
        <SvgIcon className="line">
          <line x1="0.5" y1="0.5" x2="52.5" y2="0.500005" stroke="#3A3A3A" strokeLinecap="round" strokeDasharray="3 3"/>
        </SvgIcon>
      </Typography>
     </Container>
    </ThemeProvider>
  )
}

export default Mobile;