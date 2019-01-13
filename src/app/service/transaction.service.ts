import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../Model/transaction';
import { Account } from '../Model/account';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient:HttpClient) { } 
  
  insert(transaction: Transaction) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/transaction', transaction);
   } 

  //  checkAccount(account: Account) {
  //   return this.httpClient.post('http://192.168.1.18:7000/api/account/chk', account);
  //  }   

  //  getList(account: Account) {
  //   return this.httpClient.post('http://192.168.1.18:7000/api/transaction/transactions/', account);
  //  } 
}
