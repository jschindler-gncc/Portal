import { Route } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ROUTE_PATH } from 'core';

export const routes: Route[] = [
  {
    path: ROUTE_PATH.EMPTY,
    component: DashboardLayoutComponent
  },
];
