import { HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './../Employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private id: number;
  public employee: IEmployee = new IEmployee();

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getEmployeeById();
  }

  public getEmployeeById(): void {
    this.employeeService.getEmployeeById(this.id).subscribe(
      (response: IEmployee) => {
        this.employee = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
