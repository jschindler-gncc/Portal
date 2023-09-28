import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './auth.routes';
import { AuthComponent } from './auth/auth.component';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from 'shared-ui';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
  ],
})
export class AuthModule {}
