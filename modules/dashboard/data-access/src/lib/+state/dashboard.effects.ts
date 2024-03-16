import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { DashboardActions } from './dashboard.actions';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
  ) {}

  public dashboard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadConfig),
      switchMap((data) => {
        return this.dashboardService.getDashboardConfig(data).pipe(
          map((dashboard) => {
            return DashboardActions.loadConfigSuccess({ dashboard })
          }),
          catchError((error) => {
            return of(DashboardActions.loadConfigFailure({ error }))
          })
        )
      })
    )
  );
}
