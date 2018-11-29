import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModules } from './shared/common.modules';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [  
    BrowserModule,
    CommonModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
