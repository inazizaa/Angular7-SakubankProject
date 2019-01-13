import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../Model/account'
import { AccountService } from '../../service/account.service'
import { Topup } from 'src/app/Model/topup';
import { TopupService } from 'src/app/service/topup.service';

@Component({
  selector: 'app-history-topup',
  templateUrl: './history-topup.component.html',
  styleUrls: ['./history-topup.component.css']
})
export class HistoryTopupComponent implements OnInit {
  p: number = 1;
  customernumber: number;
  accnumb: number;
  ListTopup: Topup[] = []
  constructor(private topupService: TopupService, private accountService: AccountService, private route: Router) { }

  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    this.getListTopup()
  }

   // ----mengambil data account id by custnumb---
   getListTopup(){
    let account: Account = new Account();
    account.custnumb = this.customernumber
    this.accountService.getAccount(account).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid))
      // ------memasukan data transaksi ke dalam list-------------
      let account2: Account = new Account();
      account2.accountid = this.accnumb
      console.log('ini acc num '+this.accnumb)
      this.topupService.getList(account2).subscribe((response) => {
        Object.assign(this.ListTopup, response['values']);
        console.log('ini'+JSON.stringify(response['values']));
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      })
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }
}
