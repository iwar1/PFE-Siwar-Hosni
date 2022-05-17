import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
//const AUTH_API  ="'http://localhost:8060/api/v1/users/";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl ='http://localhost:8060/api/v1/users';

  constructor(private http :HttpClient) { }
//login

login(email :string, password:string): Observable<any> {

const user = {email , password}

console.log(user);


var response = this.http.post(`${this.baseUrl}/login`, user);



console.log("55555555555555555555555555555555555 "+response);
  return response;
}
/*
login(email :string ,password :string): Observable<Object> {
  console.log("----------------  "+ email);
  console.log("88888888888888888 "+ password);

var response = this.http.post(`${this.baseUrl}/login`, email);
var response = this.http.post(`${this.baseUrl}/login`, password);
console.log("55555555555555555555555555555555555 "+response);
  return response;

}
*/
  //register
  register(User: Object): Observable<Object> {
    console.log("----------------  "+User);
    return this.http.post(`${this.baseUrl}/signup`, User);
  }

 /* register(firstName :string , lastName :string, email:string ,password:string):Observable<any>{
    return this.http.post(AUTH_API+'signup',{
        firstName,
        lastName,
        email,
        password
    });
  }*/

 /* login(email :string ,password :string) : Observable <any> {
    return this.http.post(baseUrl+'login',{
      email,
      password
    });

  }*/


}
