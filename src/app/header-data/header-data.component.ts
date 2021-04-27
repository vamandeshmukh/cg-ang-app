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

  getServerStatus(): string {
    return this.serverStatus;
  }

  constructor() { }

  ngOnInit(): void {
  }

}