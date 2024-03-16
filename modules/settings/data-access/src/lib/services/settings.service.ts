import { Injectable, inject } from '@angular/core';
import { IdNameModel, HttpService } from 'core';
import { Observable } from 'rxjs';
import { ModuleAccessPermissionEntity, RoleResponse } from '../+state/settings.models';

@Injectable()
export class SettingsService {
  private pathUrl = '';
  private http = inject(HttpService);

  // *** ModulePermissions ***

  public getModuleAccessPermissions(): Observable<ModuleAccessPermissionEntity[]> {
    return this.http.get(this.pathUrl + `moduleAccessPermissions`, {});
  }

  public updateModuleAccessPermissions(id: number, access: boolean): Observable<ModuleAccessPermissionEntity[]> {
    return this.http.put(this.pathUrl + `moduleAccessPermissions/${id}`, { access });
  }

  // *** Roles ***

  public getRoles(): Observable<IdNameModel[]> {
    return this.http.get(this.pathUrl + `roles`, {});
  }

  public deleteRole(id: number): Observable<RoleResponse> {
    return this.http.delete(this.pathUrl + `roles/${id}`);
  }

  public addRole(name: string): Observable<RoleResponse> {
    return this.http.post(this.pathUrl + `roles`, { name });
  }

  public updateRole(id: number, name: string): Observable<RoleResponse> {
    return this.http.put(this.pathUrl + `roles/${id}`, { name });
  }
}