import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload: any) {
    return this.http.post('http://localhost:3000/user/login',payload, {withCredentials: true})
  }
}
