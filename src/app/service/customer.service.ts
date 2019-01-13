import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Model/customer';
import { Account } from '../Model/account'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  
  getLogin(customer: Customer){
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/customer/auth', customer);
  }

   insert(customer: Customer) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/customeracc', customer);
   } 

   getCustomer(customer: Customer) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/customer/prof', customer);
   } 
   
   getAccCustomer(account: Account) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/account/accounts', account);
   } 

   checkusername(customer: Customer){
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/customer/cu', customer);
   }
}
