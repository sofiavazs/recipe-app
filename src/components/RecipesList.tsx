import React, { useEffect, useState } from "react";
import { Box, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { Recipe } from "../../common/interfaces";

interface Props {
  recipes: Recipe[];
}

const RecipesList: React.FC<Props> = ({ recipes }) => {
  const [search, setSearch] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (searchValue) => {
    if (searchValue !== "") {
      setSearch(searchValue);
      const filteredRecipes = recipes.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredRecipes);
    }
  };
  useEffect(() => {}, [search, filteredResults]);

  return (
    <Box direction="column">
      <Box
        width={"100vw"}
        height={"50vh"}
        justify={"center"}
        pad={{ top: "2rem" }}
        background="url('/assets/foodheroimage.jpg')"
      >
        <label htmlFor="search">Pesquisar Receitas</label>
        <input type={"search"} onChange={(e) => handleSearch(e.target.value)} />
      </Box>
      <Box width={"100vw"} direction={"row"} justify={"center"}>
        {search.length > 1
          ? filteredResults.map((filteredItem) => (
              <Card
                key={filteredItem.id}
                pad={"1rem"}
                margin={"1rem"}
                height={"13rem"}
                width={"13rem"}
                background="light-1"
              >
                <CardHeader>{filteredItem.name}</CardHeader>
                <CardBody pad="medium">{filteredItem.instructions}</CardBody>
                <CardFooter>
                  {filteredItem.difficultyLevel}
                  {filteredItem.cookingTime}
                </CardFooter>
              </Card>
            ))
          : recipes &&
            recipes.map((recipe, i) => (
              <Card
                key={i}
                pad={"1rem"}
                margin={"1rem"}
                height={"13rem"}
                width={"13rem"}
                background="light-1"
              >
                <CardHeader>{recipe.name}</CardHeader>
                <CardBody pad="medium">{recipe.instructions}</CardBody>
                <CardFooter>
                  {recipe.difficultyLevel}
                  {recipe.cookingTime}
                </CardFooter>
              </Card>
            ))}
      </Box>
    </Box>
  );
};

export default RecipesList;
