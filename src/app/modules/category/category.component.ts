import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './categories.service';
import { AuthenticationService } from '../../shared/_services/authentication.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;
  categoryId:any;  
  constructor(
      private activatedRoute: ActivatedRoute,
      private catService: CategoriesService,
      private authService: AuthenticationService
  ) {}

  ngOnInit() {    
    this.getCategoryDetails();
    this.getCategories();   
  }

  // Get categoryId
  getCategoryDetails(){
      this.activatedRoute.params.subscribe(params => {        
        let category_id = params['category_id'];
        this.categoryId = (category_id == undefined) ? '90' : category_id;      
      });
  }
  // get all categories
  getCategories(){
    this.catService.getCategories().subscribe(category => {
      this.categories = category;  
      this.categories = this.categories.categories;      
    });
  }  
  
}
