import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthActions } from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { AuthLogin, AuthRegister } from './auth.models';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  authError$ = this.store.select(AuthSelectors.selectAuthError);

  login(auth: AuthLogin) {
    this.store.dispatch(AuthActions.login(auth));
  }

  register(auth: AuthRegister) {
    this.store.dispatch(AuthActions.register(auth));
  }

  forgotPassword(email: {email: string}) {
    this.store.dispatch(AuthActions.forgotPassword(email));
  }
}
