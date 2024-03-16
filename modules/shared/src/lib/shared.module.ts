import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateInstantPipe } from './pipes/translate-instant.pipe';
import { HideParentContentDirective } from './directives/hide-parent-content.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TranslateInstantPipe, HideParentContentDirective],
  exports: [TranslateInstantPipe, HideParentContentDirective],
})
export class SharedModule {}
