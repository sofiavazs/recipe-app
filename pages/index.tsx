import { Recipe } from "../common/interfaces";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { getRecipes } from "../public/api/getRecipes";
import Headers from "../src/components/Headers";
import { Box, Card } from "grommet";
import RecipesList from "../src/components/RecipesList";

const Home: NextPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>();
  useEffect(() => {
    getRecipes()
      .then((response) => setRecipes(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <Headers />
      <Box direction="row" pad={"medium"}>
        {recipes && <RecipesList recipes={recipes} />}
      </Box>
    </main>
  );
};

export default Home;
