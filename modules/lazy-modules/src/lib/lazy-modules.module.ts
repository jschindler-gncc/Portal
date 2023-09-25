import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadModuleDirective } from './load-module.directive';
import { LoadModuleService } from './load-module.service';

@NgModule({
  declarations: [LoadModuleDirective],
  exports: [
    LoadModuleDirective
  ],
  providers: [LoadModuleService]
})
export class LazyModulesModule {}
