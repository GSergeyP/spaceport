import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import MobileModule from "./mobile.Module";

const Mobile = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <MobileModule.Mobile /> : <MobileModule.Desktop />
      }
    </>
  )
}

export default Mobile;