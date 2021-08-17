import { IEmployee } from './../Employee';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public id: number;
  public employee: IEmployee = new IEmployee();

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(
      (response: IEmployee) => {
        this.employee = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSubmit() {
    this.employeeService.updateEmployeeById(this.id, this.employee).subscribe(
      (response: IEmployee) => {
        this.router.navigate(['employees']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
