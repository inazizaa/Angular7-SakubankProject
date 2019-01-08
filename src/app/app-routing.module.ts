import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './Register/register.component';
import { DashboardComponent } from './Login/dashboard/dashboard.component';
import { TransferComponent } from './transfer/transfer.component';
import { AuthGuardService } from './Login/auth-guard.service';
import { CanActivate } from '@angular/router';

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
  {
    path : 'RegisterForm',
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
