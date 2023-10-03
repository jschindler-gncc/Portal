import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

// const { selectAll, selectEntities } = authAdapter.getSelectors();

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectIsAuth = createSelector(
  selectAuthState,
  (state) => !!state.accessToken
);