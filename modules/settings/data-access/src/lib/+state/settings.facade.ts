import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingsActions } from './settings.actions';
import { Observable } from 'rxjs';
import { selectModuleAccessPermissions, selectRoles } from './settings.selectors';
import { ModuleAccessPermissionEntity } from './settings.models';
import { IdNameModel } from 'core';

@Injectable()
export class SettingsFacade {
  constructor(private readonly store: Store) { }
  roles$: Observable<IdNameModel[]> = this.store.select(selectRoles);
  moduleAccessPermissions$: Observable<ModuleAccessPermissionEntity[]> = this.store.select(selectModuleAccessPermissions);

  public getModulePermissions(roleId: number): void {
    this.store.dispatch(SettingsActions.loadModuleAccessPermissions({ roleId }));
  }

  public updateModulePermissions(id: number, access: boolean): void {
    this.store.dispatch(SettingsActions.updateModuleAccessPermissions({ id, access }));
  }

  public getRoles(): void {
    this.store.dispatch(SettingsActions.loadRoles());
  }

  public deleteRole(id: number): void {
    this.store.dispatch(SettingsActions.deleteRole({ id }));
  }

  public addRole(name: string): void {
    this.store.dispatch(SettingsActions.addRole({ name: 'Test Role' }));
  }

  public updateRole(id: number, name: string): void {
    this.store.dispatch(SettingsActions.updateRole({ id: 2, name: 'Test Role' }));
  }
}
