import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import LangModule from "./lang.Module";

const Lang = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <LangModule.Mobile /> : <LangModule.Desktop />
      }
    </>
  )
}

export default Lang;