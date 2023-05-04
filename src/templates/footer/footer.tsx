import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import FooterModule from "./footer.Module";

const Footer = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <FooterModule.Mobile /> : <FooterModule.Desktop />
      }
    </>
  )
}

export default Footer;