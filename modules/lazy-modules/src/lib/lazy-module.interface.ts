import { ComponentFactory, NgModuleRef, Type } from "@angular/core";

export type LazyLoadModule = () => Promise<{ module: Type<unknown>; component: Type<any> }>;

export type LazyModuleComponent = {
  moduleData: {
    module: Type<unknown>;
    component: Type<unknown>;
  };
  moduleRef: NgModuleRef<unknown>;
  compFactory: ComponentFactory<any>;
};
