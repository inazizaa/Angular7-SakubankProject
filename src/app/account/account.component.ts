// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { AccountService } from './account.service';
// import { Account } from '../Login/account';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrls: ['./account.component.css']
// })
// export class AccountComponent implements OnInit {
// accountFormGroup = FormGroup;

//   constructor(private route: Router, private accountService:AccountService, private formbuilder: FormBuilder ) { }
//   account:Account = new Account();

//   ngOnInit() {
//     window.scroll(0,0)
//     this.accountFormGroup = this.formbuilder.group({
//       // customernumber: [''],
//       accountid: [''],
//       accountnumber: ['', Validators.required],
//       pin: ['', Validators.required],
//       type: ['', Validators.required],
//       balance: ['', Validators.required],
//     });
//   }

//   submitDataFormSave() {
//     let account: Account = new Account();
//     account.accountnumber = this.accountFormGroup.controls['accountnumber'].value;
//     account.pin = this.accountFormGroup.controls['pin'].value;
//     account.type = this.accountFormGroup.controls['type'].value;

//   checkaccount(){
//     this.route.navigate(['/dashboard']);
//   }
// }
