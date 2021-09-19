import type { NextPage } from "next";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Who from "./Components/Who/Who";
import Experience from "./Components/Experience/Experience";
import Finance from "./Components/Finance/Finance";
import FinanceLogos from "./Components/Finance/FinanceLogos";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contact from "./Components/Contact/Contact";
import { StylesProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst={true}>
        <div>
          <Header />
          <Banner />
          <About />
          <Who />
          <Experience />
          <Finance />
          <FinanceLogos />
          <Proyectos />
          <Contact />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
};

export default Home;
