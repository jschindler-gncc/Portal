import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { CompanyEditService } from './company-edit.service';
import { OrganizationFacade } from 'organizations-data-access';
import { CompanyEntity } from 'organizations-domain';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyEditComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  private companyData!: CompanyEntity;
  private ngUnsubscribe = new Subject<boolean>();

  constructor(
    private companyEditService: CompanyEditService,
    private location: Location,
    private organizationFacade: OrganizationFacade,
  ) {}

  public ngOnInit(): void {
    this.form = this.companyEditService.createForm();

    this.organizationFacade.company$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: CompanyEntity) => {
      this.companyData = data;
      this.form.patchValue(data);
    });
  }

  public onSave(): void {
    const data = {
      ...this.companyData,
      ...this.form.getRawValue(),
    };
  
    this.organizationFacade.updateCompany(data);
    this.location.back();
  }

  public onCancel(): void {
    this.location.back()
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
