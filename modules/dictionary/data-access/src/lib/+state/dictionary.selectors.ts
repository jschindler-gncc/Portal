import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DICTIONARY_FEATURE_KEY, DictionaryState } from './dictionary.reducer';

export const selectDictionaryState =
  createFeatureSelector<DictionaryState>(DICTIONARY_FEATURE_KEY);

export const selectDictionaryError = createSelector(
  selectDictionaryState,
  (state: DictionaryState) => state.error
);

export const selectDictionaryPermissions = createSelector(
  selectDictionaryState,
  (state: DictionaryState) => state.permissions
);

export const selectDictionaryModules = createSelector(
  selectDictionaryState,
  (state: DictionaryState) => state.modules
);

export const selectDictionaryLanguages = createSelector(
  selectDictionaryState,
  (state: DictionaryState) => state.languages
);