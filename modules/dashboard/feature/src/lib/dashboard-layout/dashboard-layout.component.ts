import {
  Component,
  OnInit,
  AfterViewInit,
  NgZone,
  ViewChild,
} from '@angular/core';
import { MdbSidenavComponent } from 'mdb-angular-ui-kit/sidenav';
import { Observable, fromEvent } from 'rxjs';
import { DashboardFacade, LanguageEntity, MenuEntity } from 'dashboard-data-access';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', { static: true }) sidenav!: MdbSidenavComponent;
  public title = 'mdb-angular-admin-dashboards';

  public mode = window.innerWidth >= 1400 ? 'side' : 'over';
  public hidden = window.innerWidth >= 1400 ? false : true;

  public menu$!: Observable<MenuEntity[]>;
  public language$!: Observable<LanguageEntity[]>;

  constructor(
    private ngZone: NgZone,
    private dashboardFacade: DashboardFacade,
  ) {}

  ngOnInit(): void {
    this.dashboardFacade.getDashboardConfig({ id: 1 }) // put userId in the future;
    this.menu$ = this.dashboardFacade.menu$;
    this.language$ = this.dashboardFacade.language$;
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

  toggleSkin() {
    document.body.classList.toggle('dark');
  }
}
