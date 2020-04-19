import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinaryTreeRoutingModule } from './binary-tree-routing.module';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';


@NgModule({
  declarations: [BinaryTreeComponent],
  imports: [
    CommonModule,
    BinaryTreeRoutingModule
  ]
})
export class BinaryTreeModule { }
