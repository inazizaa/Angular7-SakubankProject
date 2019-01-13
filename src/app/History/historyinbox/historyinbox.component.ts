import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../../Model/account'
import { AccountService } from '../../service/account.service'
import { Inbox } from 'src/app/Model/inbox';
import { InboxService } from 'src/app/service/inbox.service';

@Component({
  selector: 'app-historyinbox',
  templateUrl: './historyinbox.component.html',
  styleUrls: ['./historyinbox.component.css']
})
export class HistoryinboxComponent implements OnInit {
  p: number = 1;
  customernumber: number;
  // accnumb: number;
  ListInbox: Inbox[] = [];
  constructor(private inboxService: InboxService, private accountService: AccountService, private route: Router) { }

  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    this.getinbox()
  }

  getinbox() {
    let account: Account = new Account();
    account.custnumb = this.customernumber
    this.accountService.getAccount(account).subscribe((response) => {
      console.log(JSON.stringify(response['values'].accountnumber));
      // this.accnumb = parseInt(JSON.stringify(response['values'].accountnumber));

      console.log('ini yang di cek :'+response['values'].accountnumber)
      // ------memasukan data transaksi ke dalam list-------------
      let inbox: Inbox = new Inbox();
      inbox.accountdest = response['values'].accountnumber;
      this.inboxService.getList(inbox).subscribe((response) => {
        Object.assign(this.ListInbox, response['values']);
        console.log('ini values'+JSON.stringify(response));
      }, (err) => {
        alert('error : ' + JSON.stringify(err));
      })
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }
}
