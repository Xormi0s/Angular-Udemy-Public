import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { recipeService } from "../services/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{

  constructor(private http: HttpClient, private recipeService: recipeService){

  }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();

    this.http.put('replace', recipes).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('replace')
    .pipe(map(recipes => {
      return recipes.map(recipe => {
        return {... recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
  }
}
