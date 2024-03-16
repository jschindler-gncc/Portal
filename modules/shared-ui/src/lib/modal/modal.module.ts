import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  imports: [CommonModule, MdbModalModule],
  declarations: [ConfirmComponent],
  exports: [ConfirmComponent],
})
export class ModalModule {}
