import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any = [];    
  Products : any[]= [];
  private cartSubject = new Subject<CartState>();
  CartState = this.cartSubject.asObservable();
  
  constructor() { }

  getCartDetails(): Subject<any>{   
     return this.cartSubject;
  }

  addProductToCart(_product:any) {    
    this.Products.push(_product)
    this.cartSubject.next(<CartState>{loaded: true, products:  this.Products});
    this.getCartDetails();    
  }
}

export interface CartState {
  loaded: boolean;
  products : any[];
 
}
