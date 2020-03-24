import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialtableComponent } from './helpers/angular-material-table/angular-material-table.component';
import { TableComponent } from './table/table.component';
import { TableTwoComponent } from './table-two/table-two.component';

const routes: Routes = [
  {path:'table', component:AngularMaterialtableComponent},
  {path:'table-1', component:TableComponent},
  {path:'table-2', component:TableTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
