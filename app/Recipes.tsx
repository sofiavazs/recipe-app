import { Recipe } from "@common/interfaces";
import { getRecipes } from "@public/api/getRecipes";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import RecipesList from "./RecipesList";
import messages from "./messages";
import { Box } from "@chakra-ui/react";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const { formatMessage } = useIntl();

  useEffect(() => {
    getRecipes()
      .then((response) => setRecipes(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Box>{formatMessage(messages.header)}</Box>
      <div>{recipes && <RecipesList recipes={recipes} />}</div>
    </>
  );
};

export default Recipes;
