import { Route } from '@angular/router';
import { ROUTE_PATH } from 'core';
import { OrganizationLayoutComponent } from './components/organization-layout/organization-layout.component';
import { DepartmentStructureComponent } from './components/department-structure/department-structure.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { EmployeeStructureComponent } from './components/employee-structure/employee-structure.component';

export const routes: Route[] = [
  {
    path: ROUTE_PATH.EMPTY,
    component: OrganizationLayoutComponent,
    data: { breadcrumb: 'Organization List' },
    children: [
      {
        path: 'company/:id',
        component: CompanyComponent,
        data: { breadcrumb: 'Company' },
        children: [
          {
            path: 'departments',
            component: DepartmentStructureComponent,
            data: { breadcrumb: 'Department structure' },
            children: [
              {
                path: 'employees/:departmentId',
                component: EmployeeStructureComponent,
                data: { breadcrumb: 'Employee structure' }
              }
            ],
          },
          {
            path: 'edit',
            component: CompanyEditComponent,
            data: { breadcrumb: 'Edit Company Information' },
          }
        ]
      },
    ]
  },
];
