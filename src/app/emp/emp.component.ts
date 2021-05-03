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
export class EmpComponent implements OnInit {

  emp: Employee = new Employee();
  isEmpAvailable: boolean;

  constructor(private empService: EmpService, private formBuilder: FormBuilder) {
    console.log(`constrcutorEmpComponent`);
  }

  ngOnInit(): void {
    this.isEmpAvailable = false;
    console.log('ngOnInitEmpComponent');
  }
  onSubmit() {
    this.isEmpAvailable = true;
    this.empService.getEmpById(this.emp.eid).subscribe(data => this.emp = data);
  }
}
