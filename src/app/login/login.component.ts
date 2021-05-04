import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  onSubmit() {
    let data = this.authenticationService.authenticate(this.user.email, this.user.password);
    console.log('onSubmitLoginComponent');
    console.log(`Sign in successful with ${this.user.email} and ${this.user.password}.`);
    alert(`Sign in successful with ${this.user.email} and ${this.user.password}.`);
  }

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log('ngOnInitLoginComponent');
    this.user.userName = '';
    this.user.email = '';
    this.user.password = '';
  }
}

// https://angular.io/guide/forms 
// Step overview
// Build the basic form.
// Define a sample data model.
// Include required infrastructure such as the FormsModule.
// Bind form controls to data properties using the ngModel directive and two-way data-binding syntax.
// Examine how ngModel reports control states using CSS classes.
// Name controls to make them accessible to ngModel.
// Track input validity and control status using ngModel.
// Add custom CSS to provide visual feedback on the status.
// Show and hide validation-error messages.
// Respond to a native HTML button-click event by adding to the model data.
// Handle form submission using the ngSubmit output property of the form.
// Disable the Submit button until the form is valid.
// After submit, swap out the finished form for different content on the page.
