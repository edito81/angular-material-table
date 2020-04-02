import { SingleDataComponent } from './helpers/single-data/single-data.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DynamicTableComponent } from './helpers/dynamic-table/dynamic-table.component';

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'single', component: SingleDataComponent, data: {} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
