import { Component , OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  submitted = false;
  departForm : FormGroup;
constructor(private fb:FormBuilder , private deptService : DepartmentService){}

ngOnInit(): void {
this.departForm = this.fb.group({

  departmentName : ['', Validators.required]
})
}

get f(){ return this.departForm.controls } // on va valider nos propriétés

submit () : void
{

  this.submitted = true;

  if(this.departForm.invalid)
  { return  ;}
  else
  {
    console.log(this.departForm.value)
    this.deptService.postDepartment(this.departForm.value).subscribe(response => {
      console.log('ok')
    }, error => console.log(error))

    //ici on recupere le nom du departement
  }

}
}
