import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import {SharedModule} from "../shared/shared.module";
import {OrdersRoutingModule} from "./orders-routing.module";


@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule {
  constructor() {
    console.log('order module const');
  }

}
