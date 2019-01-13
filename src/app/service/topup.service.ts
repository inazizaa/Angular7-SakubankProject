import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topup } from '../Model/topup';
import { Account } from '../Model/account';

@Injectable({
  providedIn: 'root'
})
export class TopupService {

  constructor(private httpClient:HttpClient) { }

  insert(topup: Topup) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/topup', topup);
   } 

   getList(account: Account) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/topup/topups/', account);
   } 
}
