import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './organizations.routes';
import { SharedUiModule } from 'shared-ui';
import { SharedModule } from 'shared';
import { TranslationModule } from 'translation';
import { LIB_NAME } from 'core';
import { OrganizationLayoutComponent } from './components/organization-layout/organization-layout.component';
import { DepartmentStructureComponent } from './components/department-structure/department-structure.component';
import { OrganizationListComponent } from './components/organization-list/organization-list.component';
import { OrganizationsDataAccessModule } from 'organizations-data-access';
import { CompanyComponent } from './components/company/company.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { CompanyEditService } from './components/company-edit/company-edit.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeStructureComponent } from './components/employee-structure/employee-structure.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrganizationsDataAccessModule,
    TranslationModule.forChild(LIB_NAME.ORGANIZATION),
    ReactiveFormsModule,
    SharedUiModule,
    SharedModule,
  ],
  declarations: [
    OrganizationLayoutComponent,
    DepartmentStructureComponent,
    EmployeeStructureComponent,
    OrganizationListComponent,
    CompanyComponent,
    CompanyEditComponent,
  ],
  providers: [CompanyEditService]
})
export class OrganizationsModule {}
