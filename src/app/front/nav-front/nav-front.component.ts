import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-nav-front',
  templateUrl: './nav-front.component.html',
  styleUrls: ['./nav-front.component.css']
})
export class NavFrontComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private user: LogoutService) { }

  isLoggedUser = false

  ngOnInit(): void {
    this.auth.isLogged().then((res) => {
      this.isLoggedUser = res
    })
  }

  logout() {
    this.user.logout().subscribe(
      () => this.router.navigate(['home']),
      (err) => console.error(err)
    )
  }

}
