import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MdbSidenavModule, MdbDropdownModule, MdbCollapseModule],
  declarations: [DashboardLayoutComponent],
})
export class DashboardModule {}
