import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// https://angular.io/guide/reactive-forms
// https://angular.io/guide/form-validation

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // using FormGroup 
    // this.userForm = new FormGroup({
    //   name: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl('')
    // });

    // using FormBuilder 
    // this.userForm = this.formBuilder.group(
    //   {
    //   name: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    // }
    // );

    // Adding Validators to from using FormBuilder 
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6)]],
      confirmPassword: ['', [Validators.required, Validators.min(6)]]
    });
  }

  onSubmit(form: FormGroup) {
    alert(`User ${form.value.name} registered successfully.`);
    console.log(form.value.name);
    this.userForm.reset();
  }

  ngOnInit() {
  }
}
