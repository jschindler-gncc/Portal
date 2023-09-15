import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'profile',
    loadChildren: () =>
      loadRemoteModule('profile', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule('login', './Module').then((m) => m.RemoteEntryModule),
  },
];
