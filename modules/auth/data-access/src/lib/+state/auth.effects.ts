import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map, tap } from 'rxjs';
import { AuthActions } from './auth.actions';
import { Router } from '@angular/router';
import { ToastService } from 'shared-ui';
import { AuthService, LOCAL_STORAGE } from 'core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);
  private toastService = inject(ToastService);
  private translate = inject(TranslateService);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((auth) => 
        this.authService.login(auth).pipe(
          map((auth) => {
            this.toastService.success(this.translate.instant('auth.login.success'));
            localStorage.setItem(LOCAL_STORAGE.TOKEN, auth.accessToken);
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
          map((auth) => {
            this.toastService.success(this.translate.instant('auth.register.success'));
            localStorage.setItem(LOCAL_STORAGE.TOKEN, auth.accessToken);
            return AuthActions.registerSuccess(auth)
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
            this.toastService.success(this.translate.instant('auth.forgot.success'));
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
