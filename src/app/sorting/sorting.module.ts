import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortingRoutingModule } from './sorting-routing.module';
import { SortingHomeComponent } from './sorting-home/sorting-home.component';
import { SortingComponent } from './sorting/sorting.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { CountSortComponent } from './count-sort/count-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';


@NgModule({
  declarations: [SortingHomeComponent, SortingComponent, BubbleSortComponent, InsertionSortComponent, SelectionSortComponent, CountSortComponent, MergeSortComponent],
  imports: [
    CommonModule,
    SortingRoutingModule
  ]
})
export class SortingModule { }
