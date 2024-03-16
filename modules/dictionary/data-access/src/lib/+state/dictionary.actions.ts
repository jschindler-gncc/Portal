import { createActionGroup, props } from '@ngrx/store';
import { DictionaryResponse } from './dictionary.models';

export const DictionaryActions = createActionGroup({
  source: 'Dictionary',
  events: {
    loadDictionaries: props<any>(),
    loadDictionariesSuccess: props<{ dictionary: DictionaryResponse}>(),
    loadDictionariesFailure: props<{ error: Error }>(),
  }
});