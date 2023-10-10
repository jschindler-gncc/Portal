import {
  Component,
  OnInit,
  AfterViewInit,
  NgZone,
  ViewChild,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MdbSidenavComponent } from 'mdb-angular-ui-kit/sidenav';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', { static: true }) sidenav!: MdbSidenavComponent;
  title = 'mdb-angular-admin-dashboards';

  mode = window.innerWidth >= 1400 ? 'side' : 'over';
  hidden = window.innerWidth >= 1400 ? false : true;
  currentLang: string;
  iconFlag: string;

  constructor(private ngZone: NgZone, private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'resize').subscribe(() => {
        if (window.innerWidth < 1400 && this.mode !== 'over') {
          this.ngZone.run(() => {
            this.mode = 'over';
            this.hideSidenav();
          });
        } else if (window.innerWidth >= 1400 && this.mode !== 'side') {
          this.ngZone.run(() => {
            this.mode = 'side';
            this.showSidenav();
          });
        }
      });
    });
  }

  hideSidenav() {
    setTimeout(() => {
      this.sidenav.hide();
    }, 0);
  }

  showSidenav() {
    setTimeout(() => {
      this.sidenav.show();
    });
  }

  selectLanguage(lang: string, icon: string) {
    this.currentLang = lang;
    this.iconFlag = icon;
    this.translate.use(lang);
  }

  toggleSkin() {
    document.body.classList.toggle('dark');
  }
}
