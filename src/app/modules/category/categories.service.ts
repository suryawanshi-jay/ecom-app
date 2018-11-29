import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CategoriesService {
  constructor(private httpClient: HttpClient) {

  }
  // Get categories
  getCategories(){
    this.httpClient.get('/api/v1/product/category?access_token=f0q17tZSUDVusmW4OwzGjMH6pFaLTn7RzqHXdx4I')
    .subscribe(data => {
      console.log(data);
    })
  }
}
