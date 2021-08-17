import { EmployeeService } from './../employee.service';
import { IEmployee } from './../Employee';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: IEmployee = new IEmployee();

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {}

  public onSubmit() {

    this.employeeService.createEmployee(this.employee).subscribe(
      (response: IEmployee) => {
        this.router.navigate(['/employees']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

}
