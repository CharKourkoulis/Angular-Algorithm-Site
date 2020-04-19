import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';


const routes: Routes = [
  {path: '', component: BinaryTreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinaryTreeRoutingModule { }
