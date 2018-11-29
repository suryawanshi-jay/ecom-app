import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from "./category.component";
import { CategoriesService } from "./categories.service";
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "../product/product.component";

// Create object or routes
const routes: Routes =[
    { path: 'categories', component:CategoryComponent },
    { path: 'category/:category_id', component:CategoryComponent }
]; 

// Create category feuture moduel
@NgModule({
    declarations:[
        CategoryComponent,
        ProductComponent
    ],
    providers:[
        CategoriesService
    ],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)       
    ],
    exports:[
        CategoryComponent,
        RouterModule
    ]
})
export class CategoryModule{

}