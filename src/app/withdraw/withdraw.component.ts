import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Account } from '../Model/account'
import { Withdraw } from '../Model/withdraw'
import { AccountService } from '../service/account.service'
import { WithdrawService } from '../service/withdraw.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawFormGroup: FormGroup;
  customernumber: number;
  accnumb: number;
  refcode: string;
  values: string;

  constructor(
    private withdrawService: WithdrawService,
    private accountService: AccountService,
    private route: Router,
    private formbuilder: FormBuilder) { }
  message: string;
  messageamount: string;
  messageamount2: string;
  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    this.withdrawFormGroup = this.formbuilder.group({
      wdamount: ['', Validators.required],
      referalcode: ['', Validators.required],
      accountid: ['', Validators.required],
      pin: ['']
    });
  }

  submitDataFormSave() {
    this.messageamount = null;
    this.messageamount2 = null;
    let account: Account = new Account();
    account.custnumb = this.customernumber;
    this.accountService.getAccount(account).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid));
      // ------set account id-------------
      let account2: Account = new Account();
      account2.accountid = this.accnumb;
      account2.pin = this.withdrawFormGroup.controls['pin'].value;
      console.log('ini account ' + this.accnumb)
      console.log('ini pin' + this.withdrawFormGroup.controls['pin'].value)
      this.accountService.checkPin(account2).subscribe((response) => {
        console.log(JSON.stringify(response));
        if (JSON.stringify(response['status']) != '0') {
          this.message = "Your pin is wrong";
        } else {
          let withdraw: Withdraw = new Withdraw();
          withdraw.wdamount = this.withdrawFormGroup.controls['wdamount'].value;
          withdraw.referalcode = '' + Math.floor(100000 + Math.random() * 900000);
          withdraw.accountid = '' + this.accnumb;
          this.withdrawService.insert(withdraw).subscribe((response) => {
            console.log(JSON.stringify(response));
            if (JSON.stringify(response['status']) == '0') {
              this.refcode = response['values'].referalcode;
              swal({
                type: 'success',
                title: 'Please redeem your code below',
                text: 'Your referal code is: ' + this.refcode,
                footer: '<a (click)="savesweet()">how to use?</a>'
              })
            } else {
              this.messageamount = JSON.stringify(response['message'])
              this.messageamount2 = JSON.stringify(response['values'])
            }
          }, (err) => {
            alert('error : ' + JSON.stringify(err));
          })
        }
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      })
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }
  get() {
    let account3: Account = new Account();
    account3.custnumb = this.customernumber;
    this.accountService.getAccount(account3).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid));
      // ------set account id-------------
      let account2: Account = new Account();
      account2.accountid = this.accnumb;
      account2.pin = this.withdrawFormGroup.controls['pin'].value;
      console.log('ini account ' + this.accnumb)
      console.log('ini pin' + this.withdrawFormGroup.controls['pin'].value)
      this.accountService.checkPin(account2).subscribe((response) => {
        console.log(JSON.stringify(response));
        if (JSON.stringify(response['status']) != '0') {
          this.message = "Your pin is wrong";
        } else {

        }
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      })
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }


  // submitDataFormSave() {
  //   let account: Account = new Account();
  //   account.custnumb = this.customernumber
  //   this.accountService.getAccount(account).subscribe((response) => {
  //     console.log(JSON.stringify(response['values'].accountid));
  //     this.accnumb = parseInt(JSON.stringify(response['values'].accountid));
  //     // ------set account id-------------
  //     (async function getPin () {
  //       const {value: pin} = await swal({
  //         title: 'Enter your pin',
  //         input: 'password',
  //         inputPlaceholder: 'Enter your pin',
  //         inputAttributes: {
  //           autocapitalize: 'off',
  //           autocorrect: 'off'
  //         }
  //       })
  //       // console.log('ini acc'+this.accnumb)
  //       if (pin) {
  //         //  console.log('ini acc'+this.accnumb)
  //         let account2: Account = new Account();
  //         account2.accountid = this.accnumb;
  //         account2.pin=pin;
  //         this.accountService.checkPin(account2).subscribe((response) => {
  //           console.log(JSON.stringify(response));
  //           if (JSON.stringify(response['status']) != '0') {
  //           swal('Your pin is wrong')
  //           }else{
  //             console.log("test")
  //           // swal('Entered pin: ' + pin)
  //           let withdraw: Withdraw = new Withdraw();
  //           withdraw.wdamount = this.withdrawFormGroup.controls['tamount'].value;
  //           withdraw.referalcode = ''+Math.floor(1000000 + Math.random() * 9000000);
  //           withdraw.accountid = '' + this.accnumb;
  //           this.withdrawService.insert(withdraw).subscribe((response) => {
  //             console.log(JSON.stringify(response));
  //             if (JSON.stringify(response['status']) == '0') {
  //               this.refcode= JSON.stringify(response['values'].referalcode)
  //               swal(
  //                 'Send!',
  //                 'Your TopUp is Successed.',
  //                 'success'
  //               ).then(() => {
  //                 // this.route.navigate(['/dashboard']);
  //                 swal({
  //                   type: 'success',
  //                   title: 'Please redeem your code below',
  //                   text: 'Your referal code is: ' + this.refcode,
  //                   footer: '<a (click)="cancelChanges()">how to use?</a>'
  //                 })
  //                 // swal('Your referal code is: ' + this.refcode)
  //               })
  //             } 
  //           }, (err) => {
  //             alert('error : ' + JSON.stringify(err));
  //           })
  //           }
  //         }, (err) => {
  //           alert('error : ' + JSON.stringify(err));
  //         })
  //       }
  //       })()
  //   }, (err) => {
  //     alert('error : ' + JSON.stringify(err));
  //   })
  // }

  savesweet() {
    swal({
      type: 'success',
      title: 'Withdraw Success!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  cancelChanges() {
    this.route.navigate(['/dashboard']);
  }

  clearmsg() {
    this.message = null;
  }
}
