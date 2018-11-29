
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
        // Clone requst and set http inteceptor
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));       
        if(currentUser && currentUser.token){            
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}