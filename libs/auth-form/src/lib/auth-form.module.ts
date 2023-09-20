import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './auth.routes';
import { UiModule } from '@ngcc-new-template/ui';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    ReactiveFormsModule,
    UiModule,
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegistrationComponent,
    AuthLayoutComponent,
  ],
})
export class AuthFormModule {}
