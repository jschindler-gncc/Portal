import { LazyLoadModule } from 'modules/lazy-modules/src/lib/lazy-module.interface';


const moduleRef = () => import('./products.module');

export const ChartLazyLoad: LazyLoadModule = () =>
  moduleRef().then((m) => ({
    module: m.ProductsModule,
    component: m.ProductsModule.chartComponent
  }));
