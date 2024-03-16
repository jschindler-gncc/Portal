import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { OrganizationService } from '../services/organization.service';
import { OrganizationActions } from './organization.actions';

@Injectable()
export class OrganizationEffects {
  constructor(
    private actions$: Actions,
    private organizationService: OrganizationService,
  ) {}

  // *** Organizations ***

  public loadOrganizationList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.loadOrganizationList),
      switchMap(() => {
        return this.organizationService.getOrganizations().pipe(
          map((organizations) => OrganizationActions.loadOrganizationListSuccess({ payload: { organizations } })),
          catchError((error) => of(OrganizationActions.loadOrganizationListFailure({ error }))),
        )
      })
    )
  );

  // *** End Organizations ***

  // *** Departments *** 

  public loadDepartments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.loadDepartments),
      switchMap(({ id }) => {
        return this.organizationService.getDepartments(id).pipe(
          map((departments) => OrganizationActions.loadDepartmentsSuccess({ payload: { departments } })),
          catchError((error) => of(OrganizationActions.loadDepartmentsFailure({ error }))),
        )
      })
    )
  );   

  // *** End Departments ***

    // *** Company *** 

  public loadCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.loadCompany),
      switchMap(({ id }) => {
        return this.organizationService.getCompany(id).pipe(
          map((company) => OrganizationActions.loadCompanySuccess({ payload: { company: company[0] } })),
          catchError((error) => of(OrganizationActions.loadCompanyFailure({ error }))),
        )
      })
    )
  );

  public updateCompany$ = createEffect(() =>
  this.actions$.pipe(
      ofType(OrganizationActions.updateCompany),
      switchMap(({ data }) => {
        return this.organizationService.updateCompany(data).pipe(
          map((company) => OrganizationActions.updateCompanySuccess({ payload: { company } })),
          catchError((error) => of(OrganizationActions.updateCompanyFailure({ error }))),
        )
      })
    )
  ); 

  // *** End Company ***


  // *** Employees ***

  public loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.loadEmployees),
      switchMap(({ id }) => {
        return this.organizationService.getEmployees(id).pipe(
          map((employees) => OrganizationActions.loadEmployeesSuccess({ payload: { employees } })),
          catchError((error) => of(OrganizationActions.loadEmployeesFailure({ error }))),
        )
      })
    )
  );

  // *** End Employees ***
}
