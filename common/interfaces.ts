export interface RecipesResponse {
  response: Recipe[];
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: string;
  instructions: string;
  difficultyLevel: string;
  cookingTime: string;
  imageUrl: string;
}
