import { Injectable } from '@angular/core';
import { Account } from '../Model/account'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  getAccount(account: Account) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/account/cn', account);
   } 

   checkAccount(account: Account) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/account/chk', account);
   } 

   getList(account: Account) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/transaction/transactions/', account);
   } 
   
   checkPin(account: Account) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/account/verif', account);
   }
}
