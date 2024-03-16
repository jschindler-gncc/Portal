import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ORGANIZATION_FEATURE_KEY, OrganizationState } from './organization.reducer';

export const selectOrganizationState =
  createFeatureSelector<OrganizationState>(ORGANIZATION_FEATURE_KEY);


export const selectOrganizationsError = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.error
);

export const selectOrganizations = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.organizations
);

export const selectDepartments = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.departments
);

export const selectEmployees = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.employees
);

export const selectCompany = createSelector(
  selectOrganizationState,
  (state: OrganizationState) => state.company
);

