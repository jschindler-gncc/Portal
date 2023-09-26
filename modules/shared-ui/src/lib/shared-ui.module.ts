import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@NgModule({
  imports: [CommonModule, MdbFormsModule],
  exports: [MdbFormsModule]
})
export class SharedUiModule {}
