import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ToastModule } from './toast/toast.module';

@NgModule({
  imports: [CommonModule, MdbFormsModule, ToastModule],
  exports: [MdbFormsModule, ToastModule]
})
export class SharedUiModule {}
