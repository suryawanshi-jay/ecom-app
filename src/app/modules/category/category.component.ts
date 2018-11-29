import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './categories.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;
  categoryName:any;
  test:boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private catService: CategoriesService) { }

  ngOnInit() {
    this.getCategoryDetails();
    this.getCategories();
    this.categories = [
        {
          'name':'Beverages',
          'product_count':40
        },
        {
          'name':'Food',
          'product_count':100
        },
        {
          'name':'Household',
          'product_count':50
        },
        {
          'name':'Newest Arrivals',
          'product_count':20
        }
      ];
  }

  // Getcategories
  getCategoryDetails(){
    this.activatedRoute.params.subscribe(params => {  
      this.test = true;    
      let category_id = params['category_id'];
      this.categoryName = (category_id == undefined) ? 'Beverages' : category_id;      
  });
  }

  getCategories(){
    this.catService.getCategories();
  }
  

}
