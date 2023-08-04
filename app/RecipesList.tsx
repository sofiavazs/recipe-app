import React, { useEffect, useState } from "react";

import { Recipe } from "../common/interfaces";
import { useIntl } from "react-intl";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Input,
} from "@chakra-ui/react";

interface Props {
  recipes: Recipe[];
}

const RecipesList: React.FC<Props> = ({ recipes }) => {
  // const { formatMessage } = useIntl();
  const [search, setSearch] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<Recipe[]>([]);

  const handleSearch = (searchValue: string) => {
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
    <>
      <Center
        width={"100vw"}
        height={"50vh"}
        background="url('/assets/images/foodheroimage.jpg')"
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <label style={{ fontSize: "3rem" }} htmlFor="search">
          Search
        </label>
        <Input
          width="50%"
          type={"search"}
          background={"#fff"}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Center>
      <Center width={"100vw"}>
        {search.length > 1
          ? filteredResults.map((filteredItem) => (
              <Card
                key={filteredItem.id}
                margin={"1rem"}
                height={"13rem"}
                width={"13rem"}
                background="light-1"
              >
                <CardHeader>{filteredItem.name}</CardHeader>
                <CardBody>{filteredItem.instructions}</CardBody>
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
                margin={"1rem"}
                width={"25rem"}
                height={"25rem"}
                variant={"elevated"}
              >
                <CardHeader>{recipe.name}</CardHeader>
                <CardBody>{recipe.instructions}</CardBody>
                <CardFooter justifyContent={"space-between"}>
                  <span>{recipe.difficultyLevel}</span>
                  <span>{recipe.cookingTime}</span>
                </CardFooter>
              </Card>
            ))}
      </Center>
    </>
  );
};

export default RecipesList;
