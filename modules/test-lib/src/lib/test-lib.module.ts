import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(
            http,
            `./assets/i18n/feature/`,
            '.json'
          );
        },
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [TestComponentComponent],
  exports: [TestComponentComponent]
})
export class TestLibModule {}
