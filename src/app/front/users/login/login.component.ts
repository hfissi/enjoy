import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerForm!: FormGroup;
  public errorMsg!: string;
  
  constructor(
    private fb: FormBuilder,
    private ls: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email:['', [Validators.required,]],
      password:['', [Validators.required,]],
    })
  }

  login(f:any) {
    console.log(f)
    this.ls.login(f).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

  public saveData() {
  }

}
