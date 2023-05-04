import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import BrandModule from "./brand.Module";

const Brand = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <BrandModule.Mobile /> : <BrandModule.Desktop />
      }
    </>
  )
}

export default Brand;