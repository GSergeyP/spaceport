import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import StagesModule from "./stages.Module";

const Stages = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <StagesModule.Mobile /> : <StagesModule.Desktop />
      }
    </>
  )
}

export default Stages;