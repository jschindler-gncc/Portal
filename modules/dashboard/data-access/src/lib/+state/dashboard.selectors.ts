import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DASHBOARD_FEATURE_KEY, DashboardState } from './dashboard.reducer';

export const selectDashboardState =
  createFeatureSelector<DashboardState>(DASHBOARD_FEATURE_KEY);


export const selectDashboardError = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.error
);

export const selectDashboardMenu = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.menus
);

export const selectDashboardLanguage = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.languages
);
