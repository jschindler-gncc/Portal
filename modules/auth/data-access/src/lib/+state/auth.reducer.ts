// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { AuthActions } from './auth.actions';
import { AuthEntity } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

// export interface AuthState extends EntityState<AuthEntity> {
//   loaded: boolean; // has the Auth list been loaded
//   error?: string | null; // last known error (if any)
// }

// export interface AuthPartialState {
//   readonly [AUTH_FEATURE_KEY]: AuthState;
// }
export interface AuthState extends AuthEntity {
  loaded: boolean;
  loading: boolean;
  error?: string | null;
}

export const initialAuthState: AuthEntity = {
  // set initial required properties
  accessToken: '',
  user: null
};

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { auth }) => ({ ...state, loaded: true, ...auth })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error })),
  on(AuthActions.register, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AuthActions.registerSuccess, (state, { auth }) => ({ ...state, loaded: true, ...auth })),
  on(AuthActions.registerFailure, (state, { error }) => ({ ...state, error }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
