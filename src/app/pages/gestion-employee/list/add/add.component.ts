import { Component , OnInit } from '@angular/core';
import { DepartmentService } from '../../../../services/department.service';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import { EmployeeService } from '../../../../services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  lisDepartments : any[] = [];
  formEmployee : FormGroup;
  submitted : boolean = false;
constructor ( private employeeService : EmployeeService,private fb:FormBuilder , private departmentService : DepartmentService){}

ngOnInit(): void {
  this.getDepartment();
  this.formEmployee = this.fb.group({
    employeeFirstName : ['', Validators.required],
    employeeLastName : ['' , Validators.required],
    employeePhoneNumber : ['' , Validators.required],
    departmentId : ['' , Validators.required],

    // selon les propriétes dans le paquetage entities
  })
}

get f (){
  return this.formEmployee.controls;
}

getDepartment () : void{
 this.departmentService.getListDepartments().subscribe(data => {
this.lisDepartments.push(...data);
 },error=>{
  console.log(error)
 })
}

submit () : void {
  this.submitted = true;
  if(this.formEmployee.invalid)
  {
    return ;
  }
  else {
    this.employeeService.postEmployees(this.formEmployee.value).subscribe(data =>{
      this.formEmployee.reset();
    },err=>{
      console.log(err)
    });

   // enovyer les données au serveur
  }
}

}
