import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { MODAL_ACTION } from '../../enums/modal-action.enum';

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmComponent {
  public title!: string;

  constructor(public modalRef: MdbModalRef<ConfirmComponent>) {}

  public onClose(): void {
    this.modalRef.close(MODAL_ACTION.CLOSE);
  }

  onConfirm(): void {
    this.modalRef.close(MODAL_ACTION.CONFIRM);
  }
}
