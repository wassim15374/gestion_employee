import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
 {
  path : '',  // c quoi   video 2 24mn40s yamainicoder
  component : PagesComponent , // c quoi
  children : [
    {
      path : 'departments',
      loadChildren : ()=> import("./gestion-department/gestion-department.module").then((m) => m.GestionDepartmentModule)  //?????????????
    },
    {
      path : 'employees',
      loadChildren : ()=> import("./gestion-employee/gestion-employee.module").then((m) => m.GestionEmployeeModule)
    }
  ]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
