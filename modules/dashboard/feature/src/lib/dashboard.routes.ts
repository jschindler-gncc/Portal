import { Route } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AdminGuard, ROUTE_PATH } from 'core';

export const routes: Route[] = [
  {
    path: ROUTE_PATH.EMPTY,
    component: DashboardLayoutComponent,
    children: [
      {
        path: ROUTE_PATH.SETTINGS,
        canActivate: [AdminGuard],
        loadChildren: () => import('settings').then((m) => m.SettingsModule),
      },
      {
        path: ROUTE_PATH.ORGANIZATIONS,
        loadChildren: () => import('organizations').then((m) => m.OrganizationsModule),

      }
    ]
  },
];
