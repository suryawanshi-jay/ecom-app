import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authData: any;
  constructor(private httpClient: HttpClient) { }

  getToken(){      
    if(sessionStorage.getItem('authToken') === null){
      return this.httpClient.post('api/v1/oauth2/token',{});     
    }
    
  }
}
