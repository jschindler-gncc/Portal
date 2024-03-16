import { Route } from '@angular/router';
import { ROUTE_PATH } from 'core';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';
import { RolePermissionComponent } from './components/role-permission/role-permission.component';

export const routes: Route[] = [
  {
    path: ROUTE_PATH.EMPTY,
    component: SettingsLayoutComponent,
    children: [
      {
        path: ROUTE_PATH.ROLE_PERMISSION,
        component: RolePermissionComponent
      }
    ]
  }
];
