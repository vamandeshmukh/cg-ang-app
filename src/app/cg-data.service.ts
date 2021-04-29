import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CgDataService {

  // http://localhost:8090/Employee

  cgData: string = "This data is from CgDataService.";

  getCgData(): string {
    return this.cgData;
  }

  constructor() { }
}
