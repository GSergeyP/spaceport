import { screenResolution, useWindowSize } from "../../assest/useWindowSize";
import ProductModule from "./product.Module";

const Product = () => {
  
  const width = useWindowSize();
  return(
    <>
      {
        (width < screenResolution) ? <ProductModule.Mobile /> : <ProductModule.Desktop />
      }
    </>
  )
}

export default Product;