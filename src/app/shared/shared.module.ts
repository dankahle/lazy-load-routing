import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from "@angular/router";
import { MainComponent } from './main/main.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    CoreModule
  ],
  declarations: [HomeComponent, NotFoundComponent, MainComponent]
  // exports: [HomeComponent, NotFoundComponent, MainComponent]
})
export class SharedModule { }
