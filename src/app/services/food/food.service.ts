import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():string[]{
    return[
      '/assets/images/foods/beef-steak-with-vegetables.jpg',
      '/assets/images/foods/burger-with-melted-cheese.jpg',
      '/assets/images/foods/chickpea-salad.jpg',
      '/assets/images/foods/crispy-spicy-chicken-wings.jpg',
      '/assets/images/foods/turkey-dinner.jpg',
    ]
  }
}
