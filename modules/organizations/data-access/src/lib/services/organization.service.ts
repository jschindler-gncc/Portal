import { Injectable, inject } from '@angular/core';
import { HttpService } from 'core';
import { CompanyEntity, DepartmentEntity, EmployeeEntity, OrganizationEntity } from "organizations-domain";
import { Observable } from 'rxjs';

@Injectable()
export class OrganizationService {
  private pathUrl = '';
  private http = inject(HttpService);

  // *** Organization ***

  public getOrganizations(): Observable<OrganizationEntity[]> {
    return this.http.get(this.pathUrl + `organizations`);
  }

  // *** Departments ***

  public getDepartments(companyId: number): Observable<DepartmentEntity[]> {
    return this.http.get(this.pathUrl + `departments?companyId=${companyId}`);
  }

  // *** Company ***

  public getCompany(id: number): Observable<CompanyEntity[]> {
    return this.http.get(this.pathUrl + `companies?id=${id}`);
  }

  public updateCompany(data: CompanyEntity): Observable<CompanyEntity> {
    return this.http.put(this.pathUrl + `companies/${data.id}`, data);
  }

  // Employees

  public getEmployees(departmentId: number): Observable<EmployeeEntity[]> {
    return this.http.get(this.pathUrl + `employees?departmentId=${departmentId}`);
  }
}