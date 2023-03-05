import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Grommet } from "grommet";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px",
        color: "blue",
      },
    },
  };
  return (
    <Grommet theme={theme} full>
      <Head>
        <title>Recipes</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          lang="en"
        ></meta>
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </Grommet>
  );
};

export default App;
