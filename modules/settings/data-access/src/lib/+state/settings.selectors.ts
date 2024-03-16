import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY, SettingsState } from './settings.reducer';

export const selectSettingsState =
  createFeatureSelector<SettingsState>(SETTINGS_FEATURE_KEY);


export const selectSettingsError = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.error
);

export const selectModuleAccessPermissions = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.moduleAccessPermissions
);

export const selectRoles = createSelector(
  selectSettingsState,
  (state: SettingsState) => state.roles
);
