import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  savesweet(){
    swal({
      type: 'success',
      title: 'Transfer Success!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  cancelChanges(){
    this.route.navigate(['/dashboard']);
  }
}
