import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() categoryId;
  products:any;
  constructor(private productService: ProductService) { }

  ngOnInit() {   
    
  }  
  ngOnChanges(){    
    //Load product of category
    this.getCategoryProducts();
  }
  //Load product of category
  getCategoryProducts(){
    this.productService.getCategoryProducts(this.categoryId)
    .subscribe(products =>{
        this.products = products;
        this.products = this.products.category.products; 
        console.log(this.products);
    })
  }
}
