import React from "react";
import { Box, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { Recipe } from "../../common/interfaces";

interface Props {
  recipes: Recipe[];
}

const RecipesList: React.FC<Props> = ({ recipes }) => {
  return (
    <>
      {recipes ? (
        recipes.map((recipe, i) => (
          <Box pad={"1rem"}>
            <Card
              key={i}
              pad="small"
              height="small"
              width="small"
              background="light-1"
            >
              <CardHeader>{recipe.name}</CardHeader>
              <CardBody pad="medium">{recipe.instructions}</CardBody>
              <CardFooter>
                {recipe.difficultyLevel}
                {recipe.cookingTime}
              </CardFooter>
            </Card>
          </Box>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default RecipesList;
