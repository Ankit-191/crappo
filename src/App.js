import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Chosecrypto from "./components/Chosecrypto";
import Earn from "./components/Earn";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Market from "./components/Market";
import Startming from "./components/Startming";
import Footer from "./components/Footer";
import Detailed from "./components/Detailed";
import Profit from "./components/Profit";
function App() {
  return (
    <>
      <Hero />
      <Chosecrypto />
      <Earn />
      <Cryptocurrencies />
      <Market/>
      <Detailed/>
      <Profit/>
      <Startming/>
      <Footer/>
    </>
  );
}

export default App;
