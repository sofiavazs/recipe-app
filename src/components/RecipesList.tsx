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
        recipes.map((item, i) => (
          <Box pad={"1rem"}>
            <Card
              key={i}
              pad="small"
              height="small"
              width="small"
              background="light-1"
            >
              <CardHeader>{item.name}</CardHeader>
              <CardBody pad="medium">{item.instructions}</CardBody>
              <CardFooter>
                {item.difficultyLevel}
                {item.cookingTime}
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
