import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import BannerModule from "./banner.Module";

const Banner = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <BannerModule.Mobile /> : <BannerModule.Desktop />
      }
    </>
  )
}

export default Banner;