import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../Model/account'
import { AccountService } from '../../service/account.service'
import { Topup } from 'src/app/Model/topup';
import { WithdrawService } from 'src/app/service/withdraw.service';

@Component({
  selector: 'app-historywithdraw',
  templateUrl: './historywithdraw.component.html',
  styleUrls: ['./historywithdraw.component.css']
})
export class HistorywithdrawComponent implements OnInit {
  p: number = 1;
  customernumber: number;
  accnumb: number;
  ListWithdraw: Topup[] = []
  constructor(private withdrawService: WithdrawService, private accountService: AccountService, private route: Router) { }

  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    this.getListWD()
  }
  getListWD(){
    let account: Account = new Account();
    account.custnumb = this.customernumber
    this.accountService.getAccount(account).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountid));
      this.accnumb = parseInt(JSON.stringify(response['values'].accountid))
      // ------memasukan data transaksi ke dalam list-------------
      let account2: Account = new Account();
      account2.accountid = this.accnumb
      console.log('ini acc num '+this.accnumb)
      this.withdrawService.getList(account2).subscribe((response) => {
        Object.assign(this.ListWithdraw, response['values']);
        console.log('ini'+JSON.stringify(response['values']));
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      })
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }
}
