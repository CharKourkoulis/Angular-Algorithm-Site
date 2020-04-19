import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinaryHomeComponent } from './binary-home/binary-home.component';


const routes: Routes = [
  {path: '', component: BinaryHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinarySearchRoutingModule { }
