import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const routes: Route[] = [
  {
    path: '',
    component: AuthComponent,
    children: [{
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegistrationComponent
    }, {
      path: 'forgot-password',
      component: ForgotPasswordComponent
    }]
  },
];
