import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinarySearchRoutingModule } from './binary-search-routing.module';
import { BinaryHomeComponent } from './binary-home/binary-home.component';


@NgModule({
  declarations: [BinaryHomeComponent],
  imports: [
    CommonModule,
    BinarySearchRoutingModule
  ]
})
export class BinarySearchModule { }
