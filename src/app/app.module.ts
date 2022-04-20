import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/containers/car/car.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutComponent } from './components/containers/about/about.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { PageNotFoundComponent } from './components/containers/page-not-found/page-not-found.component';
import { CustomerComponent } from './components/containers/customer/customer.component';
import { TableComponent } from './components/shared/table/table.component';
import { InvoicesComponent } from './components/containers/invoices/invoices.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AboutComponent,
    NavbarComponent,
    PageNotFoundComponent,
    CustomerComponent,
    TableComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
