import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Topup } from '../Model/topup'
import { Account } from '../Model/account'
import { AccountService } from '../service/account.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import swal from 'sweetalert2'
import { Router } from '@angular/router';
import { TopupService } from '../service/topup.service';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  topupFormGroup: FormGroup;
  customernumber: number;
  accnumb: number;
  constructor( 
    private topupService: TopupService,
    private accountService: AccountService,
    private route: Router,
    private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    this.topupFormGroup = this.formbuilder.group({
      tamount: ['', Validators.required],
      accountid: ['', Validators.required]
    });
  }

  submitDataFormSave() {
    let account: Account = new Account();
    account.custnumb = this.customernumber
    this.accountService.getAccount(account).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid));
      // ------set account id-------------
      let topup: Topup = new Topup();
      topup.tamount = this.topupFormGroup.controls['tamount'].value;
      topup.accountid = '' + this.accnumb;

      this.topupService.insert(topup).subscribe((response) => {
        console.log(JSON.stringify(response));
        if (JSON.stringify(response['status']) == '0') {
          const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          });
          toast({
            type: 'success',
            title: 'Topup is successfully'
          }).then(() => {
            this.route.navigate(['/dashboard']);
          })
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
}