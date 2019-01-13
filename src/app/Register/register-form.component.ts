import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../Model/customer';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  customernumber:number;
  customerFormGroup: FormGroup;
  messageHeader: string;
  message: string;
  constructor(private customerService: CustomerService, private formbuilder: FormBuilder, private route: Router) { }
  customer: Customer = new Customer();

  ngOnInit() {
    this.customernumber = parseInt(sessionStorage.getItem('customernumber'))
    if (this.customernumber != null){
      this.route.navigate(['/dashboard'])
    }
    window.scroll(0, 0)
    this.customerFormGroup = this.formbuilder.group({
      // customernumber: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      idcard: ['', Validators.required],
      phonenumber: ['', Validators.required],
      pictures: [''],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  submitDataFormSave() {
    let customer: Customer = new Customer();
    customer.firstname = this.customerFormGroup.controls['firstname'].value;
    customer.lastname = this.customerFormGroup.controls['lastname'].value;
    customer.gender = this.customerFormGroup.controls['gender'].value;
    customer.birthdate = this.customerFormGroup.controls['birthdate'].value;
    customer.address = this.customerFormGroup.controls['address'].value;
    customer.idcard = this.customerFormGroup.controls['idcard'].value;
    customer.phonenumber = this.customerFormGroup.controls['phonenumber'].value;
    customer.pictures = ' '
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;

    this.customerService.insert(customer).subscribe((response) => {
      console.log(JSON.stringify(response));
      if (JSON.stringify(response['status']) != '0') {
        window.scrollBy(0, 0);
        this.messageHeader = "Something went wrong, please your input carefully"
        console.log(this.messageHeader)
      } else {
        sessionStorage.setItem("customernumber", JSON.stringify(response['values']))
        this.route.navigate(['/dashboard'])
      }
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }

  checkuser() {
    let customer: Customer = new Customer();
    customer.username = this.customerFormGroup.controls['username'].value;

    this.customerService.checkusername(customer).subscribe((response) => {
      if (JSON.stringify(response['status']) == '0') {
        this.message = "Username has already"
        window.scrollBy(0, 50);
      } else {
        this.submitDataFormSave()
      }
    }, (err) => {
      alert('error : ' + JSON.stringify(err));
    })
  }

  loginForm() {
    this.route.navigate(['/LoginForm'])
  }
  deleteMessage() {
    this.message = null
  }

}
