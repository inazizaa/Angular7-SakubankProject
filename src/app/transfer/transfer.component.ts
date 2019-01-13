import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Transaction } from '../Model/transaction'
import { Account } from '../Model/account'
import { TransactionService } from '../service/transaction.service'
import { AccountService } from '../service/account.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transactionFormGroup: FormGroup;
  customernumber: number;
  accnumb: number;
  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService,
    private route: Router,
    private formbuilder: FormBuilder) { }
  message: string;
  nameaccount: string;
  messageaccount: string;
  messagepin:string;

  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    this.transactionFormGroup = this.formbuilder.group({
      trdate: ['', Validators.required],
      tramount: ['', Validators.required],
      bankdest: ['', Validators.required],
      accountdest: ['', Validators.required],
      trdesc: ['', Validators.required],
      accountid: ['', Validators.required],
      pin: ['']
    });
  }

  validTransfer() {
    let account3: Account = new Account();
    account3.custnumb = this.customernumber;
    this.accountService.getAccount(account3).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid));
      // ------set account id-------------
      let account2: Account = new Account();
      account2.accountid = this.accnumb;
      account2.pin = this.transactionFormGroup.controls['pin'].value;
      this.accountService.checkPin(account2).subscribe((response) => {
        console.log(JSON.stringify(response));
        if (JSON.stringify(response['status']) != '0') {
          this.messagepin = "Your pin is wrong";
        } else {
          let account: Account = new Account();
          account.accountnumber = this.transactionFormGroup.controls['accountdest'].value;
          this.accountService.checkAccount(account).subscribe((response) => {
            console.log(JSON.stringify(response));
            if (JSON.stringify(response['status']) != '0') {
              this.messageaccount = "Account number is not found"
            } else {
              this.nameaccount = (response['values']['customer'].firstname + ' ' + response['values']['customer'].lastname)
              swal({
                title: 'Are you sure?',
                text: 'You would transfer Rp. ' + this.transactionFormGroup.controls['tramount'].value + ' to ' + this.nameaccount,
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, send it!',
                cancelButtonText: 'No, keep it',
                customClass: "animated tada"
              }).then((result) => {
                if (result.value) {
                  swal({
                    timer: 1
                  })
                  this.submitDataFormSave();
                } else if (result.dismiss === swal.DismissReason.cancel) {
                  swal(
                    'Cancelled',
                    'Your balance is safe :)',
                    'error'
                  )
                }
              })
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
  
  submitDataFormSave() {
    let account: Account = new Account();
    account.custnumb = this.customernumber
    this.accountService.getAccount(account).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid))
      // ------set account id-------------
      let transaction: Transaction = new Transaction();
      transaction.tramount = this.transactionFormGroup.controls['tramount'].value;
      transaction.bankdest = this.transactionFormGroup.controls['bankdest'].value;
      transaction.accountdest = this.transactionFormGroup.controls['accountdest'].value;
      transaction.trdesc = this.transactionFormGroup.controls['trdesc'].value;
      transaction.accountid = '' + this.accnumb;
      this.transactionService.insert(transaction).subscribe((response) => {
        console.log(JSON.stringify(response));
        if (JSON.stringify(response['status']) == '0') {
          swal(
            'Send!',
            'Your transaction is Successed.',
            'success'
          ).then(() => {
            this.route.navigate(['/dashboard']);
          })
        } else {
          this.message = JSON.stringify(response['values'])
          console.log(this.message)
        }
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      })
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }

  cancelChanges() {
    this.route.navigate(['/dashboard']);
  }

  clearmsgacc() {
    this.messageaccount = null;
  }

  clearmsg() {
    this.message = null;
  }

  clearmsgpin() {
    this.messagepin = null;
  }
}