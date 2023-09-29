import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

// const { selectAll, selectEntities } = authAdapter.getSelectors();

export const selectAuthLoaded = createSelector(
  selectAuthState,
  (state: AuthState) => state.loaded
);

export const selectLoginError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);


