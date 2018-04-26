import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InitGuard} from "./guards/init.guard";
import {StoreModule} from "../store/store.module";

@NgModule({
  imports: [
    CommonModule,
    StoreModule
  ],
  exports: [
    StoreModule
  ],
  providers: [InitGuard]
})
export class CoreModule { }
