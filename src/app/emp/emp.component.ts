import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/Employee';
import { EmpService } from '../services/emp.service';

// https://angular.io/start/start-forms 

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})

// using reactive from 
export class EmpComponent implements OnInit {

  emp: Employee = new Employee();
  empForm: FormGroup;

  constructor(
    private empService: EmpService,
    private formBuilder: FormBuilder
  ) {
    console.log('EmpComponent constructor');
  }

  onSubmit(form: FormGroup) {
    this.empService.getEmpById(form.value.eid).subscribe(data => this.emp = data);
  }

  ngOnInit(): void {
    console.log('EmpComponent.ngOnInit');
    this.empForm = this.formBuilder.group({
      eid: ['', Validators.required],
    });
  }
}






// using template driven form  
/*
export class EmpComponent implements OnInit {

  emp: Employee = new Employee();

  constructor(private empService: EmpService, private formBuilder: FormBuilder) {
    console.log(`constrcutorEmpComponent`);
  }

  ngOnInit(): void {
    console.log('ngOnInitEmpComponent');
  }
  onSubmit() {
    this.empService.getEmpById(this.emp.eid).subscribe(data => this.emp = data);
  }
}
*/