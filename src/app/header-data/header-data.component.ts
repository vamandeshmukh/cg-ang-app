import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-data',
  templateUrl: './header-data.component.html',
  styleUrls: ['./header-data.component.css']
})
export class HeaderDataComponent implements OnInit {

  myData: string = "This is my data";

  serverId: number = 10;
  serverStatus: string = `On`;
  addNewServer: boolean = false;
  serverAddStatus: string = `Not added.`;

  onAddServer() {
    this.serverAddStatus = `Server added.`;

  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  constructor() {
    console.log(`constrcutor`);
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
