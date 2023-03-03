import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GestionDepartmentRoutingModule } from './gestion-department-routing.module';
import { GestionDepartmentComponent } from './gestion-department.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { DepartmentService } from 'src/app/services/department.service';

@NgModule({
  declarations: [
    GestionDepartmentComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    GestionDepartmentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers : [
    DepartmentService
  ]
})
export class GestionDepartmentModule { }
