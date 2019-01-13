import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Withdraw } from '../Model/withdraw';
import { Account } from '../Model/account';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {
  
  constructor(private httpClient:HttpClient) { }
  
  insert(withdraw: Withdraw) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/withdraw', withdraw);
   } 

   getList(account: Account) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/withdraw/withdraws/', account);
   } 
}
