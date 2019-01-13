import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './Login/login.component';
import { DashboardComponent } from './Login/dashboard/dashboard.component';
import { TransferComponent } from './transfer/transfer.component';
import { RegisterFormComponent } from './Register/register-form.component';
 import { AccountComponent } from './account/account.component';
import { TopupComponent } from './topup/topup.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { HistoryTransferComponent } from './History/history-transfer/history-transfer.component';
import { HistoryTopupComponent } from './History/history-topup/history-topup.component';
import { HistorywithdrawComponent } from './History/historywithdraw/historywithdraw.component';
import { HistoryinboxComponent } from './History/historyinbox/historyinbox.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TransferComponent,
    RegisterFormComponent,
     AccountComponent,
     TopupComponent,
     WithdrawComponent,
     HistoryTransferComponent,
     HistoryTopupComponent,
     HistorywithdrawComponent,
     HistoryinboxComponent,
     HistoryinboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
