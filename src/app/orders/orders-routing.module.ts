import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "../shared/main/main.component";
import {OrderListComponent} from "./order-list/order-list.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'orders', component: OrderListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
