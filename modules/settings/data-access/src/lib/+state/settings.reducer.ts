import { createReducer, on, Action } from '@ngrx/store';
import { SettingsActions } from './settings.actions';
import { SettingsResponse } from './settings.models';

export const SETTINGS_FEATURE_KEY = 'settings';

export interface SettingsState extends SettingsResponse {
  loaded: boolean;
  loading: boolean;
  error?: string | null;
}

export const initialSettingsdState: SettingsResponse = {
  moduleAccessPermissions: [],
  roles: [],
};

const reducer = createReducer(
  initialSettingsdState,
  on(SettingsActions.loadModuleAccessPermissions, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SettingsActions.loadModuleAccessPermissionsSuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(SettingsActions.loadModuleAccessPermissionsFailure, (state, { error }) => ({ ...state, error })),
  on(SettingsActions.updateModuleAccessPermissions, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SettingsActions.updateModuleAccessPermissionsSuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(SettingsActions.updateModuleAccessPermissionsFailure, (state, { error }) => ({ ...state, error })),
  on(SettingsActions.loadRoles, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SettingsActions.loadRolesSuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(SettingsActions.loadRolesFailure, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SettingsActions.deleteRole, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SettingsActions.deleteRoleSuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(SettingsActions.deleteRoleFailure, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
);

export function settingsReducer(state: SettingsState | undefined, action: Action) {
  return reducer(state, action);
}
