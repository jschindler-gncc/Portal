import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, tap } from 'rxjs';
import { AuthActions } from './auth.actions';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'modules/shared-ui/src/lib/toast/toast.service';


@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((auth) => 
        this.authService.login(auth).pipe(
          map((auth) => {
            this.toastService.success('Success');
            return AuthActions.loginSuccess({auth})
          }),
          tap(() => this.router.navigate(['/dashboard'])),
          catchError((error) => {
            this.toastService.error(error);
            return of(AuthActions.loginFailure({ error }))
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap((auth) => 
        this.authService.register(auth).pipe(
          map(({ accessToken }) => {
            this.toastService.success('Success');
            return AuthActions.registerSuccess(accessToken)
          }),
          tap(() => this.router.navigate(['/dashboard'])),
          catchError((error) => {
            this.toastService.error(error);
            return of(AuthActions.registerFailure({ error }))
          })
        )
      )
    )
  );

  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.forgotPassword),
      switchMap((email) => 
        this.authService.forgotPassword(email).pipe(
          map(() => {
            this.toastService.success('Success');
            return AuthActions.forgotPasswordSuccess()
          }),
          tap(() => this.router.navigate(['/auth/login'])),
          catchError((error) => {
            this.toastService.error(error);
            return of(AuthActions.forgotPasswordFailure({ error }))
          })
        )
      )
    )
  );
}
