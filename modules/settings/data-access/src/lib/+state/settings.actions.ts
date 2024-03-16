import { createActionGroup, props } from '@ngrx/store';
import { ModuleAccessPermissionResponse, RoleResponse } from './settings.models';
import { Error } from 'core';

export const SettingsActions = createActionGroup({
  source: 'Settings',
  events: {
    loadModuleAccessPermissions: props<{ roleId: number }>(),
    loadModuleAccessPermissionsSuccess: props<{ payload: ModuleAccessPermissionResponse}>(),
    loadModuleAccessPermissionsFailure: props<{ error: Error }>(),

    updateModuleAccessPermissions: props<{ id: number, access: boolean }>(),
    updateModuleAccessPermissionsSuccess: props<{ payload: ModuleAccessPermissionResponse}>(),
    updateModuleAccessPermissionsFailure: props<{ error: Error }>(),

    loadRoles: props<any>(),
    loadRolesSuccess: props<{ payload: RoleResponse }>(),
    loadRolesFailure: props<{ error: Error }>(),

    addRole: props<{ name: string }>(),
    addRoleSuccess: props<{ payload: RoleResponse }>(),
    addRoleFailure: props<{ error: Error }>(),

    updateRole: props<{ id: number, name: string }>(),
    updateRoleSuccess: props<{ payload: RoleResponse }>(),
    updateRoleFailure: props<{ error: Error }>(),

    deleteRole: props<{ id: number }>(),
    deleteRoleSuccess: props<{ payload: RoleResponse }>(),
    deleteRoleFailure: props<{ error: Error }>(),
  }
});