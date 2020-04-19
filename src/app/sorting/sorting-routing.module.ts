import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingHomeComponent } from './sorting-home/sorting-home.component';
import { SortingComponent } from './sorting/sorting.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { CountSortComponent } from './count-sort/count-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';


const routes: Routes = [
  {path:'', component: SortingComponent,
      children: [
        {path: '', component: SortingHomeComponent},
        {path: 'bubblesort', component: BubbleSortComponent},
        {path: 'insertionsort', component: InsertionSortComponent},
        {path: 'selectionsort', component: SelectionSortComponent},
        {path: 'bubblesort', component: BubbleSortComponent},
        {path: 'countsort', component: CountSortComponent},
        {path: 'mergesort', component: MergeSortComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule { }
