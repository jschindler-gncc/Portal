import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AuthEntity, AuthLogin, AuthRegister } from './auth.models';
import { Error } from 'core';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<AuthLogin>(),
    loginSuccess: props<{ auth: AuthEntity}>(),
    loginFailure: props<{ error: Error }>(),
    register: props<AuthRegister>(),
    registerSuccess: props<{ auth: AuthEntity}>(),
    registerFailure: props<{ error: Error }>(),
    forgotPassword: props<{email: string}>(),
    forgotPasswordSuccess: emptyProps(),
    forgotPasswordFailure: props<{ error: Error }>()
  }
});