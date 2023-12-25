import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Services from "./components/Services";
import IntroHeader from "./components/IntroHeader";
import Experience from "./components/Experience";
import Feature from "./components/Feature";
import Getstart from "./components/Getstart";
import Happyc from "./components/Happyc";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <IntroHeader />
      <Services />
      <Experience />
      <Feature />
      {/* <Getstart /> */}
      <Products />
      <Happyc />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
