import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Account } from './account'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  
  getLogin(customer: Customer){
    // return this.httpClient.get('http://DESKTOP-ISHUNLH:7000/api/customer/customers');
    return this.httpClient.post('http://192.168.1.33:7000/api/customer/auth', customer);
  }

   insert(customer: Customer) {
    // return this.httpClient.post('http://DESKTOP-ISHUNLH:7000/api/customer', customer);
    return this.httpClient.post('http://192.168.1.33:7000/api/customeracc', customer);
   } 

   getCustomer(customer: Customer) {
    // return this.httpClient.post('http://DESKTOP-ISHUNLH:7000/api/customer', customer);
    return this.httpClient.post('http://192.168.1.33:7000/api/customer/prof', customer);
   } 

   getAccCustomer(account: Account) {
    // return this.httpClient.post('http://DESKTOP-ISHUNLH:7000/api/customer', customer);
    return this.httpClient.post('http://192.168.1.33:7000/api/account/accounts', account);
   } 

   checkusername(customer: Customer){
    return this.httpClient.post('http://192.168.1.33:7000/api/customer/cu', customer);
   }
  // delete(customer: Customer) {
    // return this.httpClient.delete('http://DESKTOP-ISHUNLH:7000/api/customer/'+ customer.customernumber);
    // return this.httpClient.delete('http://localhost:7000/api/customer/'+ customer.customernumber);
  // }

  // update(customer: Customer){
    // return this.httpClient.put('http://DESKTOP-ISHUNLH:7000/api/customer', customer);
    // return this.httpClient.put('http://localhost:7000/api/customer', customer);
  // }
}
