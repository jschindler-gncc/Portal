import { createReducer, on, Action } from '@ngrx/store';
import { OrganizationActions } from './organization.actions';
import { OrganizationResponse } from './organization.models';
import { CompanyEntity } from 'organizations-domain';

export const ORGANIZATION_FEATURE_KEY = 'organization';

export interface OrganizationState extends OrganizationResponse {
  loaded: boolean;
  loading: boolean;
  error?: string | null;
}

export const initialOrganizationState: OrganizationResponse = {
  organizations: [],
  departments: [],
  company: {} as CompanyEntity,
  employees: [],
};

const reducer = createReducer(
  initialOrganizationState,
  on(OrganizationActions.loadOrganizationList, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(OrganizationActions.loadOrganizationListSuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(OrganizationActions.loadOrganizationListFailure, (state, { error }) => ({ ...state, error })),
  on(OrganizationActions.loadDepartments, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(OrganizationActions.loadDepartmentsSuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(OrganizationActions.loadDepartmentsFailure, (state, { error }) => ({ ...state, error })),
  on(OrganizationActions.loadCompany, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(OrganizationActions.loadCompanySuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(OrganizationActions.loadCompanyFailure, (state, { error }) => ({ ...state, error })),
  on(OrganizationActions.updateCompany, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(OrganizationActions.updateCompanySuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(OrganizationActions.updateCompanyFailure, (state, { error }) => ({ ...state, error })),
  on(OrganizationActions.loadEmployees, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(OrganizationActions.loadEmployeesSuccess, (state, { payload }) => {
    return { ...state, loaded: true, ...payload };
  }),
  on(OrganizationActions.loadEmployeesFailure, (state, { error }) => ({ ...state, error })),
);

export function organizationReducer(state: OrganizationState | undefined, action: Action) {
  return reducer(state, action);
}
