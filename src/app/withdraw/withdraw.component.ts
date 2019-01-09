import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  savesweet(){
    swal({
      type: 'success',
      title: 'Withdraw Success!',
      showConfirmButton: false,
      timer: 1500
    })
  }
  cancelChanges(){
    this.route.navigate(['/dashboard']);
  }
}
