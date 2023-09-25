import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloWorldComponent],
})
export class ProductsModule {
  static get chartComponent(): typeof HelloWorldComponent {
    return HelloWorldComponent;
  }
}
