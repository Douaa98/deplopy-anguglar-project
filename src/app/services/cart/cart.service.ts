import { Injectable, IterableDiffers } from '@angular/core';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Cart } from 'src/app/shared/models/cart';
import { food } from 'src/app/shared/models/food';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  AddToCart(food:food):void{
    let cartItem =this.cart.items.find(item => item.food.id ===food.id)
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
   removeFromCart(foodId:Number):void{
    this.cart.items=this.cart.items.filter(item =>item.food.id != foodId);
    }

    changeQuantity(foodId:number,quantity:number){

      let CartItem=this.cart.items.find(item => item.food.id===foodId);
      if(!CartItem) return;
      CartItem.quantity=quantity;
    }

    getCart():Cart{
      return this.cart;
    }

  
}
