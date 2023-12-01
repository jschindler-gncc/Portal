import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ROUTE_PATH } from 'core';

export const routes: Route[] = [
  {
    path: ROUTE_PATH.EMPTY,
    component: AuthComponent,
    children: [
      {
        path: ROUTE_PATH.EMPTY,
        pathMatch: 'full',
        redirectTo: ROUTE_PATH.LOGIN
      },
      {
        path: ROUTE_PATH.LOGIN,
        component: LoginComponent
      }, 
      {
        path: ROUTE_PATH.REGISTER,
        component: RegistrationComponent
      }, 
      {
        path: ROUTE_PATH.FORGOT_PASSWORD,
        component: ForgotPasswordComponent
      },
    ],
  },
];
