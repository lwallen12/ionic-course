import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 1,
      title: "Authentic Schnitzel",
      imageURL: "https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg",
      ingredients: ["pork chops", "flour", "lemons"]
    },
    {
      id: 2,
      title: "Baked Potato",
      imageURL: "https://www.seriouseats.com/images/2016/10/video-12-1500x1125.jpg",
      ingredients: ["potatoes", "bacon bits", "butter", "green onion", "chicken breast", "cheese", "sour cream"]
    }
  ];

  constructor() { }

  public getAllRecipes() {
    return [...this.recipes];
  }

  public getRecipe(id: number) {
    return {...this.getAllRecipes().find(x => x.id === id)};
  }
}
