import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import {MainComponent} from "../../shared/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'customers', component: CustomerListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
