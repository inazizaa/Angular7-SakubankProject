import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
// import { RegisterComponent } from './Register/register.component';
import { DashboardComponent } from './Login/dashboard/dashboard.component';
import { TransferComponent } from './transfer/transfer.component';
import { RegisterFormComponent } from './Register/register-form.component'
import { CanActivate } from '@angular/router';
import { from } from 'rxjs';
import { AuthGuardService } from './Login/auth-guard.service';
// import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path : 'transfer',
    component: TransferComponent,
    canActivate: [AuthGuardService]
  }, 
  {
    path : 'dashboard',
    component: DashboardComponent,
     canActivate: [AuthGuardService]
  }, 
  {
    path : 'LoginForm',
    component: LoginComponent,
  }, 
  // {
  //   path : 'RegisterForm',
  //   component: RegisterComponent
  // }, 
  {
    path : 'RegisterForm2',
    component: RegisterFormComponent
  }
  // {
  //   path : 'AccountForm',
  //   component: AccountComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
