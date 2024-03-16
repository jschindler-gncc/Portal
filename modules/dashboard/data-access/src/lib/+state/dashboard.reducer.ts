import { createReducer, on, Action } from '@ngrx/store';
import { DashboardActions } from './dashboard.actions';
import { DashboardResponse } from './dashboard.models';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface DashboardState extends DashboardResponse {
  loaded: boolean;
  loading: boolean;
  error?: string | null;
}

export const initialDashboardState: DashboardResponse = {
  menus: [],
};

const reducer = createReducer(
  initialDashboardState,
  on(DashboardActions.loadConfig, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DashboardActions.loadConfigSuccess, (state, { dashboard }) => {
    return { ...state, loaded: true, menus: dashboard.menus };
  }),
  on(DashboardActions.loadConfigFailure, (state, { error }) => ({ ...state, error })),
);

export function dasboardReducer(state: DashboardState | undefined, action: Action) {
  return reducer(state, action);
}
