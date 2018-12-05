import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  
  //get products under category
  getCategoryProducts(categoryId:any){
    return this.httpClient.get(`/api/v1/product/category/${categoryId}?access_token=${ sessionStorage.getItem('authToken')}`);    
  }
}
