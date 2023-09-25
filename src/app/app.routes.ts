import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('dashboard').then((m) => m.DashboardModule),
  },
  {
    path: 'login',
    loadComponent: () => import('auth').then((m) => m.AuthModule),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
