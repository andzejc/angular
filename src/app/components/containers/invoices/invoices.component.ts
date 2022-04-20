import {Component, OnInit, ViewChild} from '@angular/core';
import { InvoiceForm } from "../../../models/constants";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Invoice} from "../../../models/Invoice";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  @ViewChild('closebutton') closeButton: any;
  form = InvoiceForm;
  invoices!: Invoice[];
  invoiceForm!: FormGroup;
  tableLabels = ['Id', 'Amount', 'Category', 'Bank Transfer', 'Date', 'Additional Info', 'Payment type', 'Actions'];
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.loadInvoiceData();
    this.createForm();
  }

  createForm(){
    this.invoiceForm = this.formBuilder.group({
      [this.form.AMOUNT]: [''],
      [this.form.CATEGORY]: [''],
      [this.form.DATE]: [''],
      [this.form.IS_BANK_TRANSFER]: [''],
      [this.form.PAYMENT_TYPE]: [''],
      [this.form.ADDITIONAL_INFO]: [''],
    })
  }

  onSubmit() {
    this.api.saveInvoice(this.invoiceForm.value).subscribe(() => {
      this.invoiceForm.reset();
      this.changeModalVisibility();
      alert('saved');
      this.loadInvoiceData();
    })
    console.log(this.invoiceForm.value);
  }

  loadInvoiceData() {
    this.api.getInvoices().subscribe((invoices) => {
      this.invoices = invoices;
    })
  }

  onEdit(id: number) {
    this.api.getInvoice(id).subscribe((invoice) => {
      console.log(invoice);
      this.invoiceForm.patchValue(invoice);
    })
  }

  changeModalVisibility() {
    let ref = document.getElementById('invoiceModal');
    ref?.click();
  }

  onDelete(id: number) {
    this.api.deleteInvoice(id).subscribe((resp) => {
      console.log(resp);
      this.loadInvoiceData();
    })
  }
}
