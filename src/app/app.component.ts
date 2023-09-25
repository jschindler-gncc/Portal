import { Component } from '@angular/core';
import { ChartLazyLoad } from 'modules/products/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngcc-modules';
  readonly ChartLazyLoad = ChartLazyLoad;

  chartReady(message: string) {
    console.log(message);
  }
}
