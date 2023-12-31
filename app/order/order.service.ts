import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "app/order/order.model";
import { Observable } from "rxjs/observable";
import {HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map'
import {MEAT_API} from '../app.api'
import { LoginService} from '../security/login/login.service'

@Injectable()

export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient,
              private loginService: LoginService){}

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item:CartItem){
    this.cartService.removeItem(item)
  }

  itemsValue():number{
    return this.cartService.total()
  }

  checkOrder(order: Order): Observable<Order>{
      let headers = new HttpHeaders()
      if(this.loginService.isLoggedIn()){
        headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
      }
      return this.http.post<Order>(`${MEAT_API}/orders`,
        order, {headers: headers})

  }

  clear(){
    this.cartService.clear()
  }

}
