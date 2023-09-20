import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login',
        },
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: {
          title: 'Forgot Password',
        },
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {
          title: 'Registration',
        },
      },
    ],
  },
];
