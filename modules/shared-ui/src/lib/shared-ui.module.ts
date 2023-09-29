import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';

@NgModule({
  imports: [CommonModule, MdbFormsModule, MdbNotificationModule],
  exports: [MdbFormsModule]
})
export class SharedUiModule {}
