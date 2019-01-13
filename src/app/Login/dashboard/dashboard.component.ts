import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../Model/customer'
import { Account } from '../../Model/account'
import { CustomerService } from '../../service/customer.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customernumber:number;
  customerFormGroup: FormGroup;
  data=[];
  ListAccount: Account[]=[]

  constructor(private customerService: CustomerService, private formbuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
  this.customernumber=parseInt(sessionStorage.getItem('customernumber'))
  this.getuser();
  this.getaccount()

  }
  
  toTransfer(){
  this.route.navigate(['/Historytransfer'])
  }

  toTopup(){
    this.route.navigate(['/Historytopup'])
    }

  toWithdraw(){
      this.route.navigate(['/Historywithdraw'])
      }
  
  toInbox(){
    this.route.navigate(['/Historyinbox'])
    }

  getuser() {
    let customer: Customer = new Customer();
    customer.customernumber = this.customernumber
    this.customerService.getCustomer(customer).subscribe((response) => {
      Object.assign(this.data,response['values'])
      console.log(JSON.stringify(response['values']));
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }

  getaccount() {
    let account: Account = new Account();
    account.custnumb = this.customernumber
    this.customerService.getAccCustomer(account).subscribe((response) => {
      Object.assign(this.ListAccount,response['values'])
      console.log(JSON.stringify(response['values']));
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }

  toform(){
    this.route.navigate(['/Account'])
  }
}
