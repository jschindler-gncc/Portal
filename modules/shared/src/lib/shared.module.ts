import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateInstantPipe } from './pipes/translate-instant.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TranslateInstantPipe],
  exports: [TranslateInstantPipe],
})
export class SharedModule {}
