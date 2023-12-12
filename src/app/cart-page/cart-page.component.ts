import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!:Cart;
constructor(private cartService:CartService){}
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
