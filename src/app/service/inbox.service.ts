import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inbox } from '../Model/inbox';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private httpClient:HttpClient) { }

  getList(inbox: Inbox) {
    return this.httpClient.post('http://DESKTOP-B4TFURG:7000/api/inbox/inboxs/', inbox);
   }
}
