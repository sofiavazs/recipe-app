import axios from "axios";
import { Recipe } from "@/common/interfaces";

export const getRecipes = async (): Promise<Recipe[]> => {
  const url = "/api/recipes.json";
  const { data } = await axios.get(url);
  return data;
};
