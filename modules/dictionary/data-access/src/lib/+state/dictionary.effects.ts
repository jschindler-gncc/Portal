import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import { DictionaryService } from '../services/dictionary.service';
import { DictionaryActions } from './dictionary.actions';

@Injectable()
export class DictionaryEffects {
  constructor(
    private actions$: Actions,
    private dictionaryService: DictionaryService,
  ) {}

  public dictionaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DictionaryActions.loadDictionaries),
      switchMap(() => {
        return this.dictionaryService.getDictionaries().pipe(
          map((dictionary) => DictionaryActions.loadDictionariesSuccess({ dictionary })),
          catchError((error) => of(DictionaryActions.loadDictionariesFailure({ error })))
        )
      })
    )
  );
}
