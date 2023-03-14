import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      addRecipe: "Add Recipe",
      recipe: "Recipes",
      searchRecipe: "Search",
    },
  },
  pt: {
    translation: {
      addRecipe: "Adicionar Receita",
      recipe: "Receitas",
      searchRecipe: "Pesquisar Receita",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
