export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  photo: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}
