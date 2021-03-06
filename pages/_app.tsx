import "../styles/App.scss";
import type { AppProps } from "next/app";
import { StylesProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { LangProvider } from "../Components/Context/langContext";
import Layout from "./Layout/Layout";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst={true}>
        <LangProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LangProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}
export default MyApp;
