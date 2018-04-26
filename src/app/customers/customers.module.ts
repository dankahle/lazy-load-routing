import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomersRoutingModule} from "./customers-routing/customers-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule {

  constructor() {
    console.log('cust module const');
  }
}
