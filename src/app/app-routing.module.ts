import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sorting', loadChildren: () => import('./sorting/sorting.module').then(m => m.SortingModule)},
  {path: 'binarysearch', loadChildren: () => import('./binary-search/binary-search.module').then(m => m.BinarySearchModule)},
  {path: 'binarytree', loadChildren: () => import('./binary-tree/binary-tree-routing.module').then(m => m.BinaryTreeRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
