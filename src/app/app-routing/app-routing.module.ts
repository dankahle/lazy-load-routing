import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "../shared/not-found/not-found.component";
import {HomeComponent} from "../shared/home/home.component";
import {InitGuard} from "../core/guards/init.guard";
import {CoreModule} from "../core/core.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [InitGuard]
  },
  {
    path: 'pft',
    loadChildren: 'app/customers/customers.module#CustomersModule',
    canActivate: [InitGuard]
  },
  {
    path: 'ord',
    loadChildren: 'app/orders/orders.module#OrdersModule',
    canActivate: [InitGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false}),
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
