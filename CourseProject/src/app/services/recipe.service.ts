import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "./shopping-list.service";

@Injectable()
export class recipeService {

  recipesChanged = new Subject<Recipe[]>();

  /* private recipes: Recipe[] = [
      new Recipe('Cheeseburger', 'Delicious homemade cheeseburger with fries',
      'https://cdn.pixabay.com/photo/2017/08/08/18/09/burger-2612137_960_720.jpg',
      [new Ingredient("buns", 1), new Ingredient("hamburger", 1), new Ingredient("cheese", 1), new Ingredient("french fries", 25)]),

      new Recipe('Pizza pepperoni', 'Quick and easy pizza pepperoni',
      'https://res.cloudinary.com/hsxfx8igq/image/upload/t_16x9_recipe_image,f_auto/v1598630652/Pepperoni-Pizza_ienlb6.png',
      [new Ingredient("pizza dough", 1), new Ingredient("pizza sauce", 1), new Ingredient("mozzarella cheese", 1), new Ingredient("pepperoni slices", 20)])
    ]; */

  private recipes: Recipe[] = [];
  recipeSelected = new Subject<Recipe>();

  constructor(private shoppinglistService: shoppingListService){

  }

  getRecipes(){
      return this.recipes.slice();
  }

  getRecipesWithID(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
