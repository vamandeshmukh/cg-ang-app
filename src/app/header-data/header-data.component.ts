import { Component, OnInit } from '@angular/core';
import { CgDataService } from '../cg-data.service';
import { Employee } from '../models/Employee';
import { Post } from '../models/Post';

@Component({
  selector: 'app-header-data',
  templateUrl: './header-data.component.html',
  styleUrls: ['./header-data.component.css']
})
export class HeaderDataComponent implements OnInit {

  cgDataVar: string = this.cgDataService.getCgData();
  mockData: Post = new Post();

  empData: Employee = new Employee();
  
  constructor(private cgDataService: CgDataService) {
    console.log(`HeaderDataComponentConstrcutor`);
  }

  ngOnInit(): void {
    console.log('HeaderDataComponentngOnInit');
    this.cgDataService.getMockData().subscribe(data => this.mockData = data);
    this.cgDataService.getEmpById(101).subscribe(data => this.empData = data);
  }

  // constructor(private cgDataService: CgDataService) {
  //   console.log(`constrcutor`);
  //   setTimeout(() => {
  //     this.addNewServer = true;
  //   }, 3000);
  // }

  // currentStyles: {

  // };

  // setCurrentStyles() {
  //   this.currentStyles = {
  //     'color': 'red',
  //     'background-color': 'blue'
  //   };
  // }

  // names = ['Sonu', 'Monu', 'Tonu'];
  // myData: string = "This is my data";
  // myBday = new Date();

  // serverId: number = 1234567890;
  // serverName: string = `my server`;
  // serverStatus: string = `On`;
  // addNewServer: boolean = false;
  // serverAddStatus: string = `Not added.`;

  // onChangeServerName(event: any) { // event: Event
  //   this.serverName = event.target.value;
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  // }


  // onAddServer() {
  //   this.serverAddStatus = `Server added.`;
  // }

  // getServerStatus(): string {
  //   return this.serverStatus;
  // }




}
