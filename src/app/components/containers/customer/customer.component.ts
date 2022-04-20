import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { CustomerForm } from "../../../models/constants";
import {Customer} from "../../../models/Customer";

@Component({
  selector: 'app-invoice',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  prices?: string[];
  form = CustomerForm;
  customerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    age: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    let customer: Customer = {
      name: this.customerForm.get(this.form.NAME)?.value,
      lastName: this.customerForm.get(this.form.LAST_NAME)?.value,
      age: this.customerForm.get(this.form.AGE)?.value,
      email: this.customerForm.get(this.form.EMAIL)?.value
    };
    this.saveCustomer(customer);
  }

  saveCustomer(customer: Customer): void {
    //daro issaugojima invoice i DB
    console.log(customer);
    console.log('ISSAUGOTA');
  }

}
