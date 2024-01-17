import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart!:Cart;
constructor(private cartService:CartService ,private foodService:FoodService){
  let foods=foodService.getAll();
  cartService.AddToCart(foods[1]);
  cartService.AddToCart(foods[2]);
  cartService.AddToCart(foods[3]);
  cartService.AddToCart(foods[4]);

  this.setCart();
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
removeFromcart(CartItem:CartItem){
  this.cartService.removeFromCart(CartItem.food.id);
  this.setCart();
}
changeQuantity(CartItem:CartItem,quantityInString:string){
  const quantity=parseInt(quantityInString);
  this.cartService.changeQuantity(CartItem.food.id,quantity);
  this.setCart();
}

setCart(){
  this.cart=this.cartService.getCart();
}
}
