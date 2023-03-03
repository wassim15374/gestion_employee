import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
const baseUrl = 'http://localhost:9090/api/employees/delete';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  getEmployees() : Observable <any>{
    //return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`)
       return this.httpClient.get("http://localhost:9090/api/employees")

  }

 postEmployees (data : any) : Observable<any>{
   return  this.httpClient.post("http://localhost:9090/api/employees",data)
  }

 /*  getEmployee(employeeId : number) : Observable<any>
  {
    return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees/${employeeId}`);
  }

  getEmployeesByDepartment (departmentId : number) : Observable<any[]>{
    return this.httpClient.get<any[]>(`${environment.apiUrl}/${environment.prefix}/employees/by/${departmentId}`);
  }*/

  getEmployeesByPagination( params :any) : Observable <any>{
    //return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`)
       return this.httpClient.get("http://localhost:9090/api/employees/paging",{params})

  }

  deleteEmployee (id : any) : Observable<any>{
   // return  this.httpClient.delete("http://localhost:9090/api/employees/delete/${id}")

    return this.httpClient.delete(`${baseUrl}/${id}`);

    //const url = http://localhost:9090/api/employees/delete/${id};
    //return this.httpClient.delete(url);
  }



  updateEmployee( data :any , id : number) : Observable <any>{
    //return this.httpClient.get<any>(`${environment.apiUrl}/${environment.prefix}/employees`)
       return this.httpClient.put("http://localhost:9090/api/employees/update/${id}",{data})

  }

}
