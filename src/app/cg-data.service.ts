import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/Post';

// https://angular.io/guide/http

@Injectable({
  providedIn: 'root'
})
export class CgDataService {

  private cgData: string = "This data is from CgDataService.";
  private mockApi: string = 'https://jsonplaceholder.typicode.com/posts/2';
  private empApi: string = 'http://localhost:8090/employee/getThisEmp/';


  constructor(private httpClient: HttpClient) { }
  // constructor() { }

  getCgData(): string {
    return this.cgData;
  }

  getMockData(): Observable<any> {
    console.log('getMockData');
    return this.httpClient.get(this.mockApi);

  }

  getEmpById(id: number): Observable<any> {
    console.log('getEmpById');
    // return this.httpClient.get(`${this.empApi}${id}`);
    return this.httpClient.get(`${this.empApi}101`);
  }
}
