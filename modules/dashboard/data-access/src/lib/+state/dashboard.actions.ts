import { createActionGroup, props } from '@ngrx/store';
import { DashboardRequest, DashboardResponse } from './dashboard.models';
import { Error } from 'core';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    loadConfig: props<DashboardRequest>(),
    loadConfigSuccess: props<{ dashboard: DashboardResponse}>(),
    loadConfigFailure: props<{ error: Error }>(),
  }
});