import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from './product.service';
import {  CartService } from '../../shared/_services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() categoryId;
  products: any;
  viewType: string = "col-sm-4";
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {

  }
  ngOnChanges() {
    //Load product of category
    this.getCategoryProducts();
  }
  //Load product of category
  getCategoryProducts() {
    this.productService.getCategoryProducts(this.categoryId)
      .subscribe(products => {
        this.products = products;
        this.products = this.products.category.products;       
      })
  }

  // List view Product
  showProductListView() {
    this.viewType = "col-sm-4";
  }
  // Grid View
  showProductGridView() {
    this.viewType = "col-sm-6";
  }

  // Add product to cart
  addToCart(product) {      
    this.cartService.addProductToCart(product);
  }
}
