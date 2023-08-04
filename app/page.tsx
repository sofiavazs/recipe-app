"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import English from "@i18n/en.json";
import Portuguese from "@i18n/pt.json";
import { IntlProvider } from "react-intl";
import Recipes from "./Recipes";
import { use, useEffect, useState } from "react";

interface Props {}

const Home: React.FC<Props> = () => {
  const [language, setLanguage] = useState<string>("en");

  const localeMessages = {
    en: English,
    pt: Portuguese,
  };

  useEffect(() => {
    const browserLanguage = navigator.language.split("-")[0];
    if (language !== browserLanguage) {
      setLanguage(browserLanguage);
    }
    console.log(language);
  }, []);

  return (
    <IntlProvider
      locale={language}
      messages={localeMessages[language as keyof typeof localeMessages]}
    >
      <CacheProvider>
        <ChakraProvider>
          <main className="app">
            <Recipes />
          </main>
        </ChakraProvider>
      </CacheProvider>
    </IntlProvider>
  );
};

export default Home;
