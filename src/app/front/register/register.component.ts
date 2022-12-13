
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { ConfirmPasswordValidator } from "./ConfirmPasswordValidator";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public errorMsg!: string;

  constructor(
    private fb: FormBuilder,
    private u:RegisterService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
  
      username:['', [Validators.required, Validators.maxLength(20),Validators.minLength(2)]],
      email :['',[Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
      ]],
      confirmPassword: ["",Validators.required],
    
    },
    {
      validator: ConfirmPasswordValidator("password", "confirmPassword")
    });
    
  }
  add(f:any){
    const {confirmPassword, ...form} = f
    this.u.addUser(form).subscribe(
      () => {
        this.registerForm.reset();
        console.log('user created');
      }
    )
  }


  



  public setNotificationSetting(method: string): void {
    const phoneControl = this.registerForm.get('phone');
  
    if (method === 'text') {
      phoneControl!.setValidators(Validators.required);
    } else {
      phoneControl!.clearValidators();
    }
  
    phoneControl!.updateValueAndValidity();
  
  }



}


