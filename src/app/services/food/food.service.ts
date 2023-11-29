import { Injectable } from '@angular/core';
import { food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():food[]{
    return[
      {
        id: 1,
        name: 'beef-steak-with-vegetables',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/beef-steak-with-vegetables.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'burger-with-melted-cheese',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/burger-with-melted-cheese.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'chickpea-salad',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/chickpea-salad.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'crispy-spicy-chicken-wings',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/crispy-spicy-chicken-wings.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'turkey-dinner',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/turkey-dinner.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      
    ]
  }
}
