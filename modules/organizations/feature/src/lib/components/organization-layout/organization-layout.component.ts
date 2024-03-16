import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationEntity } from 'organizations-domain';
import { OrganizationFacade } from 'organizations-data-access';

@Component({
  selector: 'lib-organization-layout',
  templateUrl: './organization-layout.component.html',
  styleUrls: ['./organization-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationLayoutComponent implements OnInit {
  organizations$!: Observable<OrganizationEntity[]>;

  constructor(private organizationFacade: OrganizationFacade) {}

  ngOnInit(): void {
    this.organizationFacade.getOrganizations();
    this.organizations$ = this.organizationFacade.organizations$
  }
}
