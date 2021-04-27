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

  getServerStatus(): string {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

}
