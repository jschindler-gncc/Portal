import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { DashboardDataAccessModule } from 'dashboard-data-access';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { TranslationModule } from 'translation';
import { LanguageComponent } from './language/language.component';
import { LIB_NAME } from 'core';
import { SharedUiModule } from 'shared-ui';
import { SharedModule } from 'shared';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule.forChild(LIB_NAME.DASHBOARD),
    MdbSidenavModule,
    MdbDropdownModule,
    MdbCollapseModule,
    DashboardDataAccessModule,
    SharedUiModule,
    SharedModule,
  ],
  declarations: [
    DashboardLayoutComponent,
    DashboardMenuComponent,
    LanguageComponent,
  ],
})
export class DashboardModule {}
