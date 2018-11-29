import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CategoryModule } from "../modules/category/category.module";
import { HttpClientModule } from '@angular/common/http';

// Create object or routes
const appRoutes: Routes = [
    { path: '',   redirectTo: '/categories', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
  ];

// Create category feuture moduel
@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent,
        FooterComponent       
    ],
    imports:[
        CommonModule,
        CategoryModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)   
    ],
    exports:[
        CommonModule,        
        HeaderComponent,
        FooterComponent,
        CategoryModule,
        HttpClientModule,
        RouterModule
    ]
})
export class CommonModules{

}