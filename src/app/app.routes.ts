import { Route } from '@angular/router';
import { AuthGuard, NoAuthGuard, ROUTE_PATH } from 'core';

export const appRoutes: Route[] = [
  {
    path: ROUTE_PATH.DASHBOARD,
    canActivate: [AuthGuard],
    loadChildren: () => import('dashboard').then((m) => m.DashboardModule),
  },
  {
    path: ROUTE_PATH.AUTH,
    canActivate: [NoAuthGuard], 
    loadChildren: () => import('auth').then((m) => m.AuthModule),
  },
  {
    path: ROUTE_PATH.ANY,
    redirectTo: ROUTE_PATH.DASHBOARD,
  },
];
