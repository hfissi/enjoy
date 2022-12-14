import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  logout() {
    return this.http.post('http://localhost:3000/user/logout', {}, {withCredentials: true})
  }
}
