import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private empApi: string = 'http://localhost:8090/employee/getThisEmp/';

  constructor(private httpClient: HttpClient) {
    console.log('constrcutorEmpService');
  }

  getEmpById(id: number): Observable<any> {
    console.log('getEmpByIdEmpService');
    return this.httpClient.get(`${this.empApi}${id}`);
  }

}
