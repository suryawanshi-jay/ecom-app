import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/_services/cart.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productData:any = [];
  cartPrice:any = 0.00;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getCartDetails();
  }

  getCartDetails(){        
    this.cartService.getCartDetails()
    .subscribe(data =>{
       this.productData = data;
       this.productData.products.forEach(element => {
          let price = Number(element.price.replace('$',''));
          this.cartPrice += price;
       });      
    })
    
  }

}
