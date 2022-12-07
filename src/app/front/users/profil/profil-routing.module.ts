import { PasswordComponent } from './password/password.component';
import { AccountComponent } from './account/account.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"account",component:AccountComponent},
  {path: 'password',component: PasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
