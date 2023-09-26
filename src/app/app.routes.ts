import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard').then((m) => m.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth').then((m) => m.AuthModule),
  },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: '/login',
  // },
];
