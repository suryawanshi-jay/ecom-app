import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoriesService {
  constructor(private httpClient: HttpClient) {

  }
  // Get categories
  getCategories(){
    return this.httpClient.get(`/api/v1/product/category?access_token=${sessionStorage.getItem('authToken')}`);    
  }
}
