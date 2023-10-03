import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ToastService } from './toast.service';
import { MdbNotificationService } from 'mdb-angular-ui-kit/notification';

@NgModule({
  declarations: [ToastComponent],
  imports: [CommonModule],
  exports: [ToastComponent],
  providers: [MdbNotificationService, ToastService]
})
export class ToastModule {}
