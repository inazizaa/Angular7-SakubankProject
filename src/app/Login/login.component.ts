import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Customer } from '../Model/customer'
import { CustomerService } from '../service/customer.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import  swal  from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customerFormGroup: FormGroup;
  message:string;
  customernumber:number;
  @Input()
  customer: Customer;

  constructor(private customerService: CustomerService, private formbuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    if (this.customernumber != null){
      this.route.navigate(['/dashboard'])
    }
    window.scroll(0,0)
    this.customerFormGroup = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.updateData();
    //this.resultForm.emit(true)
    // this.scrollWin()
  }

  submitDataFormSave() {
    let customer: Customer = new Customer();
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;

    this.customerService.getLogin(customer).subscribe((response) => {
      console.log(JSON.stringify(response['values']));
      console.log(JSON.stringify(response['status']));
      if (JSON.stringify(response['status']) != '0'){
        this.message="Username or password is wrong"
        console.log(this.message)
        this.customerFormGroup.controls['password'].setValue('');
      }
      else{
        const toast = swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000
        });
        
        toast({
          type: 'success',
          title: 'Signed in successfully'
        })
        sessionStorage.setItem("customernumber",JSON.stringify(response['values'].customernumber));
        this.route.navigate(['/dashboard']) //untuk direct ke dashboard
      }
      // this.result.emit(true);
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }

  updateData() {
    this.setDatatoForm(this.customer);
  }

  setDatatoForm(customer) {
    if (this.customer) {
      this.customerFormGroup.controls['username'].setValue(this.customer.username);
      this.customerFormGroup.controls['password'].setValue(this.customer.password);
    }
  }

  prosesResultForm(resultForm) {
    if (resultForm) {
      this.setDatatoForm(this.customer)
    }
  }
  
  registerForm(){
    this.route.navigate(['/RegisterForm2'])
  }
  
  deletemessage(){
    this.message=null
  }

  }

