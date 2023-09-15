import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@ngcc-new-template/auth-form').then(m => m.AuthFormModule) }
];
