import { IEmployee } from './Employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiServerUrl: string = environment.apiServerUrl;

  constructor(private httpClient: HttpClient) { }

  public getAllEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public createEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public getEmployeeById(id: number): Observable<IEmployee> {
    return this.httpClient.get<IEmployee>(`${this.apiServerUrl}/employee/find/${id}`);
  }

  public updateEmployeeById(id: number, employee: IEmployee): Observable<IEmployee> {
    return this.httpClient.put<IEmployee>(`${this.apiServerUrl}/employee/update/${id}`, employee);
  }

  public deleteEmployeebId(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/employee/delete/${id}`);
  }
}
