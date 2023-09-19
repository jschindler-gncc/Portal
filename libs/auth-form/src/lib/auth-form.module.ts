import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './auth.routes';
import { UiModule } from '@ngcc-new-template/ui';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(remoteRoutes), UiModule],
  declarations: [LoginComponent],
})
export class AuthFormModule {}
