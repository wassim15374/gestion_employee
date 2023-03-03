import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//import { environment } from 'src/environments/environment';
import { environment } from '../../environments/environment';


// pour comminuqer avec le back end il faut les services
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient : HttpClient) { }

  getListDepartments () : Observable <any>{

   // return this.httpClient.get<any>('${environment.apiUrl}/${environment.prefix}/departments')
   return this.httpClient.get("http://localhost:9090/api/departments")
  }

  postDepartment (data :any) : Observable <any>{

    return this.httpClient.post('http://localhost:9090/api/departments',data)
  }

  getOneDepartment (id : number) : Observable <any>{

    return this.httpClient.get<any>('${environment.apiUrl}/${environment.prefix}/departments/${id}')
  }

}
