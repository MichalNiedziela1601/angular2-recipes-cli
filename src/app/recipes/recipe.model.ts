import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public totalCost: number;

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], totalCost: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.totalCost = totalCost
  }
}
