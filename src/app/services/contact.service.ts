import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8060/api/v1/messages';

  constructor(private http: HttpClient) { }

  getMessageList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/consulterList`);
  }
  getMessage(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createMessage(Message: Object): Observable<Object> {
    console.log("----------------  "+Message);
    return this.http.post(`${this.baseUrl}/add`, Message);
  }
  deleteMessage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
}
