import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationFacade } from 'organizations-data-access';
import { CompanyEntity } from 'organizations-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent {
  company$!: Observable<CompanyEntity>;

  constructor(
    private organizationFacade: OrganizationFacade,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.organizationFacade.getCompany(+id);
      this.company$ = this.organizationFacade.company$
    }
  }
}
