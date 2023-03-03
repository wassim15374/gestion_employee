import { Component , OnInit } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{

  CURRENTINDEX = -1;
  PAGE = 0;
  count = 0;
 PAGESIZE = 3;
  listEmployees : any = [] ;
constructor(private employeeService : EmployeeService ){}

ngOnInit(): void {
  this.getEmployeesPaging();
 // this.getEmployees();
}

getEmployees () : void {
  this.employeeService.getEmployees().subscribe (data => {
    this.listEmployees.push(...data);
  },error => console.log(error))
}

getRequestParams(page : number , pageSize : number) : any
{
  let params : any = {};
  if(page)
  {
    params['page'] = page -1;
  }
  if ( pageSize)
  {
    params['size'] = pageSize;
  }
  return params;
}

getEmployeesPaging () : void{
const params = this.getRequestParams(this.PAGE,this.PAGESIZE);
this.employeeService.getEmployeesByPagination(params)
.subscribe(response => {
  const {employees , totalItems} = response ;
  this.listEmployees  = employees ;
  this.count = totalItems;

  console.log(employees);
}, error =>console.log(error));
}


handlePageChange (event : number)
{
  this.PAGE = event ;
  this.getEmployeesPaging();
}

handleSizePageChange(event : any)
{
this.PAGESIZE = event.target.value;
this.PAGE = 1;
this.getEmployeesPaging();
}


onDelete = (employeeId : number) =>
{
  if ( confirm("Are you sure you want to delete this employee ? "))
  {
    this.employeeService.deleteEmployee(employeeId).subscribe(response =>{
    },error =>console.log(error));
  }



}
}
