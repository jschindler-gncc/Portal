import { createNgModule } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { LazyLoadModule, LazyModuleComponent } from './lazy-module.interface';

@Injectable({ providedIn: 'root' })
export class LoadModuleService {
  constructor(private injector: Injector) {}

  async loadComponentModule(loadModuleCallback: LazyLoadModule): Promise<LazyModuleComponent> {
    const moduleData = await loadModuleCallback();
    const moduleRef = createNgModule(moduleData.module, this.injector);
    return {
      moduleData,
      moduleRef,
      compFactory: moduleRef.componentFactoryResolver.resolveComponentFactory(moduleData.component),
    };
  }
}
