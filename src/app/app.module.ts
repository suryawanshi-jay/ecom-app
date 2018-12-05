import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModules } from './shared/common.modules';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/_helpers/token.interceptor';
import { AppLoadService } from './shared/_services/app-load.service';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [  
    BrowserModule,
    CommonModules
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    },
    { 
      provide: APP_INITIALIZER, 
      useFactory:get_settings , 
      deps: [AppLoadService], 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function get_settings(appLoadService: AppLoadService) {
  return () => appLoadService.initializeMyApp();
}