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
import { AccountComponent } from './account/account.component';
import { TopupComponent } from './topup/topup.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HistoryTransferComponent } from './History/history-transfer/history-transfer.component';
import { HistorywithdrawComponent } from './History/historywithdraw/historywithdraw.component';
import { HistoryTopupComponent } from './History/history-topup/history-topup.component';
import { HistoryinboxComponent } from './History/historyinbox/historyinbox.component';

const routes: Routes = [
  { path : 'transfer', component: TransferComponent, canActivate: [AuthGuardService] }, 
  { path : 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] }, 
  { path : 'LoginForm', component: LoginComponent},  
  { path : 'RegisterForm2', component: RegisterFormComponent },
  { path : 'Account', component: AccountComponent },
  { path : 'Topup', component: TopupComponent },
  { path : 'Withdraw', component: WithdrawComponent },
  { path : 'Historyinbox', component: HistoryinboxComponent },
  { path : 'Historytransfer', component: HistoryTransferComponent },
  { path : 'Historywithdraw', component: HistorywithdrawComponent },
  { path : 'Historytopup', component: HistoryTopupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
