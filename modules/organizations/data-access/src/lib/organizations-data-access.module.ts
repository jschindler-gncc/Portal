import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromOrganization from './+state/organization.reducer';
import { OrganizationEffects } from './+state/organization.effects';
import { OrganizationFacade } from './+state/organization.facade';
import { OrganizationService } from './services/organization.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrganization.ORGANIZATION_FEATURE_KEY, fromOrganization.organizationReducer),
    EffectsModule.forFeature([OrganizationEffects]),
  ],
  providers: [OrganizationFacade, OrganizationService],
})
export class OrganizationsDataAccessModule {}
