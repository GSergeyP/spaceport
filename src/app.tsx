import { useEffect } from "react";
import Header from "./templates/header/header";
import Lang from "./templates/lang/lang";
import Banner from "./templates/banner/banner";
import Stages from "./templates/stages/stages";
import Mobile from "./templates/mobile/mobile";
import Brand from "./templates/brand/brand";
import Product from "./templates/product/product";
import Footer from "./templates/footer/footer";
import "./app.css";

const App = () => {

  useEffect(() => {
    //Определение языка 
    interface Navigator {
      userLanguage?: string;
      browserLanguage?: string;
      languages: readonly string[];
      language: string;
    }

    const navigator: Navigator = window.navigator;
    const language = navigator.userLanguage || navigator.language;

    localStorage.setItem('lang', language);
  }, [])
  return (
    <>
      <Header />
      <Lang />
      <Banner />
      <Stages />
      <Mobile />
      <Brand />
      <Product />
      <Footer />
    </>
  );
}

export default App;
