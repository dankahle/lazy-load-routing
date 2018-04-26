import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "../shared/not-found/not-found.component";
import {HomeComponent} from "../shared/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pft',
    loadChildren: 'app/customers/customers.module#CustomersModule'
  },
  {
    path: 'ord',
    loadChildren: 'app/orders/orders.module#OrdersModule'
  },
  {
    path: '**',
    component: NotFoundComponent
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
