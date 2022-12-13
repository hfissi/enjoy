import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/user'
  loggedIn = false

  async isLogged(): Promise<boolean> {
    const res = this.http.get(this.url, { withCredentials: true }).pipe(take(1))
    .toPromise()
    
    
    await res.then(() => {
      this.loggedIn = true;
    }).catch(() => {
      this.loggedIn = false;
    })

    return this.loggedIn
  }
}
