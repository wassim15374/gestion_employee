import { Component ,OnInit } from '@angular/core';
import { DepartmentService } from '../../../services/department.service';  // lors de l'imort sans autre modification dans la page il y a une erreur

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit
 {

  public departments : any[] = [];

  constructor( private depService : DepartmentService){}

  ngOnInit(): void {

    //this.loadListDepartments();

    this.depService.getListDepartments().subscribe(data =>{this.departments= data;})

  }

  loadListDepartments():void
  {
    this.depService.getListDepartments().subscribe(data => {
      console.log(data);

      this.departments.push(...data);
    },err => console.log(err));
  }
}
