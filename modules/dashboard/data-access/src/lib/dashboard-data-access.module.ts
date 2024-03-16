import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './+state/dashboard.reducer';
import { DashboardEffects } from './+state/dashboard.effects';
import { DashboardFacade } from './+state/dashboard.facade';
import { DashboardService } from './services/dashboard.service';
import { DictionaryDataAccessModule } from 'dictionary-data-access';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDashboard.DASHBOARD_FEATURE_KEY, fromDashboard.dasboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
    DictionaryDataAccessModule,
  ],
  providers: [DashboardFacade, DashboardService],
})
export class DashboardDataAccessModule {}
