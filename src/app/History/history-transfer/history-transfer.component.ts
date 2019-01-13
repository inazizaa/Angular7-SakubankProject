import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../Model/account'
import { AccountService } from '../../service/account.service'
import { TransactionService } from '../../service/transaction.service'
import { Transaction } from 'src/app/Model/Transaction';

@Component({
  selector: 'app-history-transfer',
  templateUrl: './history-transfer.component.html',
  styleUrls: ['./history-transfer.component.css']
})
export class HistoryTransferComponent implements OnInit {
  p: number = 1;
  customernumber: number;
  accnumb: number;
  ListTransaction: Transaction[] = []
  constructor(private transactionService: TransactionService, private accountService: AccountService, private route: Router) { }
  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    this.getaccount()
  }

  // ----mengambil data account id by custnumb---
  getaccount() {
    let account: Account = new Account();
    account.custnumb = this.customernumber
    this.accountService.getAccount(account).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid))
      // ------memasukan data transaksi ke dalam list-------------
      let account2: Account = new Account();
      account2.accountid = this.accnumb
      this.accountService.getList(account2).subscribe((response) => {
        Object.assign(this.ListTransaction, response['values']);
        console.log(JSON.stringify(response['values']));
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      })
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }
}
