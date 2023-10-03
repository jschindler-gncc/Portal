import { Injectable } from '@angular/core';
import { MdbNotificationRef, MdbNotificationService } from 'mdb-angular-ui-kit/notification';
import { ToastComponent } from './toast.component';

@Injectable()
export class ToastService {
  notificationRef: MdbNotificationRef<ToastComponent> | null = null;

  constructor(private notificationService: MdbNotificationService) {}

  info(text: string) {
    this.notificationRef = this.notificationService.open(ToastComponent, { autohide: true, data: { text, cssClass: 'toast-info' } });
  }

  success(text: string) {
    this.notificationRef = this.notificationService.open(ToastComponent, { autohide: true, data: { text, cssClass: 'toast-success' } });
  }

  error(text: string) {
    this.notificationRef = this.notificationService.open(ToastComponent, { autohide: true, data: { text, cssClass: 'toast-danger' } });
  }
}
