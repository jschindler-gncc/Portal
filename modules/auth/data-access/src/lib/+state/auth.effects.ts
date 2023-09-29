import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { AuthActions } from './auth.actions';
import { AuthService } from '../auth.service';


@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((auth) => 
        this.authService.login(auth).pipe(
          map((auth) => AuthActions.loginSuccess({auth})),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((auth) => 
        this.authService.register(auth).pipe(
          map(({ accessToken }) => AuthActions.loginSuccess(accessToken)),
          catchError((error) => of(AuthActions.registerFailure({ error })))
        )
      )
    )
  );
}
