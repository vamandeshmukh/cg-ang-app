import { Component, OnInit } from '@angular/core';
import {CgDataService} from '../cg-data.service';
@Component({
  selector: 'app-header-data',
  templateUrl: './header-data.component.html',
  styleUrls: ['./header-data.component.css']
})
export class HeaderDataComponent extends CgDataService implements OnInit {

  // empData: string = cgEmpData;

  currentStyles: {};
  /* . . . */
  setCurrentStyles() {
    this.currentStyles = {
      'font-color' : 'red'
    };
  }

  names = ['Sonu', 'Monu', 'Tonu'];
  myData: string = "This is my data";
  myBday = new Date();

  serverId: number = 1234567890;
  serverName: string = `my server`;
  serverStatus: string = `On`;
  addNewServer: boolean = false;
  serverAddStatus: string = `Not added.`;

  onChangeServerName(event: any) { // event: Event
    this.serverName = event.target.value;
    console.log(event.target.value);
    console.log(event.target.name);
  }


  onAddServer() {
    this.serverAddStatus = `Server added.`;
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  constructor() {
    super();
    console.log(`constrcutor`);
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
