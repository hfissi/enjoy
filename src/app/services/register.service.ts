import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) {}
  addUser(d:any){
    return this.http.post('http://localhost:3000/register',d)
}
}