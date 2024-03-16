import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OrganizationEntity } from 'organizations-domain';

@Component({
  selector: 'organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationListComponent {
  @Input() items!: OrganizationEntity[];
}
