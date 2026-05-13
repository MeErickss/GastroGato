export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  prepTime: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
  tips: string[];
}