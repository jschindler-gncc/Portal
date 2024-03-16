import { createActionGroup, props } from '@ngrx/store';
import { Error } from 'core';
import { CompanyResponse, DepartmentResponse, EmployeeResponse, OrganizationListResponse } from './organization.models';
import { CompanyEntity } from 'organizations-domain';

export const OrganizationActions = createActionGroup({
  source: 'Organization',
  events: {
    loadOrganizationList: props<any>(),
    loadOrganizationListSuccess: props<{ payload: OrganizationListResponse }>(),
    loadOrganizationListFailure: props<{ error: Error }>(),

    loadCompany: props<{ id: number }>(),
    loadCompanySuccess: props<{ payload: CompanyResponse }>(),
    loadCompanyFailure: props<{ error: Error }>(),

    updateCompany: props<{ data: CompanyEntity }>(),
    updateCompanySuccess: props<{ payload: CompanyResponse }>(),
    updateCompanyFailure: props<{ error: Error }>(),

    loadDepartments: props<{ id: number }>(),
    loadDepartmentsSuccess: props<{ payload: DepartmentResponse }>(),
    loadDepartmentsFailure: props<{ error: Error }>(),

    loadEmployees: props<{ id: number }>(),
    loadEmployeesSuccess: props<{ payload: EmployeeResponse }>(),
    loadEmployeesFailure: props<{ error: Error }>(),
  }
});