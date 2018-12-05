import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppLoadService {
  response:any;
  constructor(private httpClient: HttpClient) { }

  initializeMyApp(): Promise<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `Basic VWdvQXV0aDMyMTY1NDpSVGdPQnN0QUJ4MjN4OTgxd3BvQQ==`
    }); 
    let options = {
      headers: httpHeaders
    };
    const response = this.httpClient.post('api/v1/oauth2/token',{},options)
      .toPromise()
      .then(res => {
        this.response = res;
        sessionStorage.setItem('authToken',this.response.access_token);
        return res;
      });

    return response;
  }
}
