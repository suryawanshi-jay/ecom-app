
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {   
        console.log("I am intercepted"); 
        // Clone requst and set http inteceptor
        let authToken = sessionStorage.getItem('authToken');  
        if(authToken == undefined){     
            console.log("Inside header settings");       
            request = request.clone({
                setHeaders: {
                    Authorization: 'Basic VWdvQXV0aDMyMTY1NDpSVGdPQnN0QUJ4MjN4OTgxd3BvQQ=='
                }
            });
        }
        return next.handle(request);
    }
}   