import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-data',
  templateUrl: './header-data.component.html',
  styleUrls: ['./header-data.component.css']
})
export class HeaderDataComponent implements OnInit {

  myData: string = "This is my data";

  serverId: number = 10;
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
    console.log(`constrcutor`);
    setTimeout(() => {
      this.addNewServer = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
