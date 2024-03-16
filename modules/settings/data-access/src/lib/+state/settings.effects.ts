import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { SettingsService } from '../services/settings.service';
import { SettingsActions } from './settings.actions';

@Injectable()
export class SettingsEffects {
  constructor(
    private actions$: Actions,
    private settingsService: SettingsService,
  ) {}

  // *** ModuleAccessPermissions ***

  public loadModuleAccessPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActions.loadModuleAccessPermissions),
      switchMap(() => {
        return this.settingsService.getModuleAccessPermissions().pipe(
          map((moduleAccessPermissions) => SettingsActions.loadModuleAccessPermissionsSuccess({ payload: { moduleAccessPermissions } })),
          catchError((error) => of(SettingsActions.loadModuleAccessPermissionsFailure({ error }))),
        )
      })
    )
  );

  public updateModuleAccessPermissions$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SettingsActions.updateModuleAccessPermissions),
    switchMap(({ id, access }) => {
      return this.settingsService.updateModuleAccessPermissions(id, access).pipe(
        map((moduleAccessPermissions) => SettingsActions.updateModuleAccessPermissionsSuccess({ payload: { moduleAccessPermissions } })),
        catchError((error) => of(SettingsActions.loadModuleAccessPermissionsFailure({ error }))),
      )
    })
  )
);

  // *** End ModuleAccessPermissions ***

  // *** Roles *** 

  public loadRoles$ = createEffect(() => 
    this.actions$.pipe(
      ofType(SettingsActions.loadRoles),
      switchMap(() => {
        return this.settingsService.getRoles().pipe(
          map((roles) => SettingsActions.loadRolesSuccess({ payload: { roles } })),
          catchError((error) => of(SettingsActions.loadRolesFailure({ error }))),
        )
      })
    )
  );

  public deleteRole$ = createEffect(() => 
    this.actions$.pipe(
      ofType(SettingsActions.deleteRole),
      switchMap(({ id }) => {
        return this.settingsService.deleteRole(id).pipe(
          map((roles) => SettingsActions.deleteRoleSuccess({ payload: roles })),
          catchError((error) => of(SettingsActions.deleteRoleFailure({ error }))),
        )
      })
    )
  );

  public addRole$ = createEffect(() => 
    this.actions$.pipe(
      ofType(SettingsActions.addRole),
      switchMap(({ name }) => {
        return this.settingsService.addRole(name).pipe(
          map((roles) => SettingsActions.addRoleSuccess({ payload: roles })),
          catchError((error) => of(SettingsActions.addRoleFailure({ error }))),
        )
      })
    )
  );

  public updateRole$ = createEffect(() => 
    this.actions$.pipe(
      ofType(SettingsActions.updateRole),
      switchMap(({ id, name }) => {
        return this.settingsService.updateRole(id, name).pipe(
          map((roles) => SettingsActions.updateRoleSuccess({ payload: roles })),
          catchError((error) => of(SettingsActions.updateRoleFailure({ error }))),
        )
      })
    )
  );

  // *** End Roles ***
}
