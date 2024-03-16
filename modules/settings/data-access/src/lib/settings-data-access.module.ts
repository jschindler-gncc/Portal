import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSettings from './+state/settings.reducer';
import { SettingsEffects } from './+state/settings.effects';
import { SettingsFacade } from './+state/settings.facade';
import { SettingsService } from './services/settings.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSettings.SETTINGS_FEATURE_KEY, fromSettings.settingsReducer),
    EffectsModule.forFeature([SettingsEffects]),
  ],
  providers: [SettingsFacade, SettingsService],
})
export class SettingsDataAccessModule {}
