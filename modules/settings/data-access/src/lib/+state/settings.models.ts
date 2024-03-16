import { IdNameModel } from "core";

export interface SettingsResponse {
  moduleAccessPermissions: ModuleAccessPermissionEntity[];
  roles: IdNameModel[];
}

export interface ModuleAccessPermissionResponse {
  moduleAccessPermissions: ModuleAccessPermissionEntity[];
}

export interface ModuleAccessPermissionEntity {
  id: number;
  roleId: number;
  moduleId: number;
  moduleName: string;
  permissions: Array<{ id: number, access: boolean }>;
  access: boolean;
}

export interface RoleResponse {
  roles: IdNameModel[];
}
