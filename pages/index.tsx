import type { NextPage } from "next";
import Insta from "./Components/Banner/Instagram";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Who from "./Components/Who/Who";
import Experience from "./Components/Experience/Experience";
import Finance from "./Components/Finance/Finance";
import FinanceLogos from "./Components/Finance/FinanceLogos";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contact from "./Components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Insta />
      <About />
      <Who />
      <Experience />
      <Finance />
      <FinanceLogos />
      <Proyectos />
      <Contact />
    </div>
  );
};

export default Home;
