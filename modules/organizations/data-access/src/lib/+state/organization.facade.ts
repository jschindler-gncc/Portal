import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrganizationActions } from './organization.actions';
import { Observable, map } from 'rxjs';
import { selectCompany, selectDepartments, selectEmployees, selectOrganizations } from './organization.selectors';
import { CompanyEntity, DepartmentEntity, EmployeeEntity, OrganizationEntity } from "organizations-domain";

@Injectable()
export class OrganizationFacade {
  organizations$: Observable<OrganizationEntity[]> = this.store.select(selectOrganizations);
  departments$: Observable<DepartmentEntity[]> = this.store.select(selectDepartments);
  employees$: Observable<EmployeeEntity[]> = this.store.select(selectEmployees);
  company$: Observable<CompanyEntity> = this.store.select(selectCompany);
  

  constructor(private readonly store: Store) { }

  public getOrganizations(): void {
    this.store.dispatch(OrganizationActions.loadOrganizationList());
  }

  public getDepartments(id: number): void {
    this.store.dispatch(OrganizationActions.loadDepartments({ id }));
  }

  public getDepartmentNameById(id: number): Observable<string | undefined> {
    return this.departments$.pipe(
      map((departments) => {
        const foundDepartment = departments.find((department) => department.id === id);
        return foundDepartment ? foundDepartment.name : undefined;
      })
    );
  }

  public getCompany(id: number): void {
    this.store.dispatch(OrganizationActions.loadCompany({ id }));
  }

  public updateCompany(data: CompanyEntity): void {
    this.store.dispatch(OrganizationActions.updateCompany({ data }));
  }

  public getEmployees(id: number): void {
    this.store.dispatch(OrganizationActions.loadEmployees({ id }));
  }
}
