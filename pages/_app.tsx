import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Grommet } from "grommet";
import { FormProvider, ContextUIProvider } from "../common/context";
import "../styles/globals.scss";
import "./../public/translations/i18n";

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
        <ContextUIProvider>
          <FormProvider>
            <Component {...pageProps} />
          </FormProvider>
        </ContextUIProvider>
      </React.StrictMode>
    </Grommet>
  );
};

export default App;
