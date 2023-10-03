import { Component } from '@angular/core';
import { MdbNotificationRef } from 'mdb-angular-ui-kit/notification';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  text: string | null = null;
  cssClass: string | null = null;

  constructor(public notificationRef: MdbNotificationRef<ToastComponent>) {}
}
