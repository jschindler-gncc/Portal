import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardActions } from './dashboard.actions';
import * as DasboardSelectors from './dashboard.selectors';
import { DashboardRequest, MenuEntity } from './dashboard.models';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardFacade {
  constructor(private readonly store: Store) { }

  menu$: Observable<MenuEntity[]> = this.store.select(DasboardSelectors.selectDashboardMenu);
  dashboardError$ = this.store.select(DasboardSelectors.selectDashboardError);

  getDashboardConfig(request: DashboardRequest) {
    this.store.dispatch(DashboardActions.loadConfig(request));
  }
}
