import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import HeaderModule from "./header.Module";

const Header = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <HeaderModule.Mobile /> : <HeaderModule.Desktop />
      }
    </>
  )
}

export default Header;