import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-header',
  // template: '<p>sorry header works...!</p>'
  templateUrl: './header.component.html' // ,
  , styles: ['p {color: blue}']
  // styleUrls: ['./header.component.css'] 
})
export class HeaderComponent implements OnInit {

  name: string = "Capgemini";
  phone: number = 1020;
  constructor() { }

  ngOnInit(): void {
  }
}
