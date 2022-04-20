import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from "./components/containers/car/car.component";
import { AboutComponent } from "./components/containers/about/about.component";
import { PageNotFoundComponent } from "./components/containers/page-not-found/page-not-found.component";
import { CustomerComponent } from "./components/containers/customer/customer.component";
import { InvoicesComponent } from "./components/containers/invoices/invoices.component";

const routes: Routes = [
  { path: '', component: CarComponent },
  { path: 'home', component: CarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create-invoice', component: CustomerComponent },
  {path: 'invoices', component: InvoicesComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
