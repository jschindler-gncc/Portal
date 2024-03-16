import { CompanyEntity, DepartmentEntity, EmployeeEntity, OrganizationEntity } from "organizations-domain";

export interface OrganizationResponse {
  organizations: OrganizationEntity[];
  departments: DepartmentEntity[];
  company: CompanyEntity;
  employees: EmployeeEntity[];
}

export interface OrganizationListResponse {
  organizations: OrganizationEntity[];
}

export interface DepartmentResponse {
  departments: DepartmentEntity[];
}

export interface EmployeeResponse {
  employees: EmployeeEntity[];
}

export interface CompanyResponse {
  company: CompanyEntity;
}

