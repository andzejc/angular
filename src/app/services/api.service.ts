import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invoice} from "../models/Invoice";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  saveInvoice(invoice: Invoice) {
    return this.http.post<Invoice>(`${this.BASE_URL}/posts`, invoice);
  }

  getInvoices() {
    return this.http.get<Invoice[]>(`${this.BASE_URL}/posts`);
  }

  getInvoice(id: number) {
    return this.http.get<Invoice>(`${this.BASE_URL}/posts/${id}`);
  }

  deleteInvoice(id: number) {
    return this.http.delete<Invoice>(`${this.BASE_URL}/posts/${id}`);
  }
}
