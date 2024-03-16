import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsLayoutComponent } from './components/settings-layout/settings-layout.component';
import { RouterModule } from '@angular/router';
import { routes } from './settings.routes';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { SettingsDataAccessModule } from 'settings-data-access';
import { FormsModule } from '@angular/forms';
import { RolePermissionComponent } from './components/role-permission/role-permission.component';
import { ModulePermissionComponent } from './components/module-permission/module-permission.component';
import { SharedUiModule } from 'shared-ui';
import { TranslationModule } from 'translation';
import { LIB_NAME } from 'core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslationModule.forChild(LIB_NAME.SETTINGS),
    SettingsDataAccessModule,
    MdbRippleModule,
    MdbTabsModule,
    FormsModule,
    SharedUiModule,
  ],
  declarations: [
    SettingsLayoutComponent,
    RolePermissionComponent,
    ModulePermissionComponent,
  ],
})
export class SettingsModule {}
