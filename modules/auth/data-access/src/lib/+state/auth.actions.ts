import { createActionGroup, props } from '@ngrx/store';
import { AuthEntity, AuthLogin, AuthRegister } from './auth.models';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    login: props<AuthLogin>(),
    loginSuccess: props<{ auth: AuthEntity}>(),
    loginFailure: props<{ error: any }>(),
    register: props<AuthRegister>(),
    registerSuccess: props<{ auth: AuthEntity}>(),
    registerFailure: props<{ error: any }>()
  }
});