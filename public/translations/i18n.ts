import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      recipe: "Recipe",
    },
  },
  pt: {
    translation: {
      recipe: "Receita",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
