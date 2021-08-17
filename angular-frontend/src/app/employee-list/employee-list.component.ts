import { IEmployee } from './../Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: IEmployee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  private getAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (response: IEmployee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateEmployee(id: number): void {
    this.router.navigate(['update-employee', id]);
  }

  public deleteEmployee(id: number): void {
    this.employeeService.deleteEmployeebId(id).subscribe(
      (response: void) => {
        this.getAllEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public employeeDetails(id: number): void {
    this.router.navigate(['employee-details', id]);
  }

}
