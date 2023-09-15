import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './auth.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  declarations: [LoginComponent],
})
export class AuthFormModule {}
