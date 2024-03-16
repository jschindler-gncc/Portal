import { createReducer, on, Action } from '@ngrx/store';
import { DictionaryActions } from './dictionary.actions';
import { DictionaryResponse } from './dictionary.models';

export const DICTIONARY_FEATURE_KEY = 'dictionary';

export interface DictionaryState extends DictionaryResponse {
  loaded: boolean;
  loading: boolean;
  error?: string | null;
}

export const initialDictionaryState: DictionaryResponse = {
  permissions: [],
  modules: [],
  languages: [],
};

const reducer = createReducer(
  initialDictionaryState,
  on(DictionaryActions.loadDictionaries, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DictionaryActions.loadDictionariesSuccess, (state, { dictionary }) => {
    return { ...state, loaded: true, ...dictionary };
  }),
  on(DictionaryActions.loadDictionariesFailure, (state, { error }) => ({ ...state, error })),
);

export function dictionaryReducer(state: DictionaryState | undefined, action: Action) {
  return reducer(state, action);
}
