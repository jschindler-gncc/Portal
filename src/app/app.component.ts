import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChartLazyLoad } from 'modules/products/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readonly ChartLazyLoad = ChartLazyLoad;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  chartReady(message: string) {
    console.log(message);
  }
}
