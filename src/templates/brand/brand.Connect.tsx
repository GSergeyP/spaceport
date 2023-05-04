import axios from "axios";
import { url } from "./brand.Const";


const BrendConnect = async () => {
  const resp = await axios.get(url);
  return resp;
}

export default BrendConnect;