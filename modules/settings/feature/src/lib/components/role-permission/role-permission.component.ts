import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DictionaryFacade } from 'dictionary-data-access';
import { MdbTabsComponent } from 'mdb-angular-ui-kit/tabs';
import { Observable } from 'rxjs';
import { ModuleAccessPermissionEntity, SettingsFacade } from 'settings-data-access';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ConfirmComponent, MODAL_ACTION } from 'shared-ui';
import { IdNameModel } from 'core';

@Component({
  selector: 'lib-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolePermissionComponent implements OnInit, AfterViewInit {
  @ViewChild('tabs') tabs!: MdbTabsComponent;
  @ViewChild('confirmModalTpl') confirmModalTpl!: TemplateRef<any>;

  roles$!: Observable<IdNameModel[]>;
  permissions$!: Observable<IdNameModel[]>;
  modules$!: Observable<IdNameModel[]>;
  moduleAccessPermissions$!: Observable<ModuleAccessPermissionEntity[]>;

  constructor(
    private modalService: MdbModalService,
    private dictionaryFacade: DictionaryFacade,
    private settingsFacade: SettingsFacade,
    private changeRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tabs.setActiveTab(0);
      this.changeRef.markForCheck();
    }, 250);
  }

  public onDelete(id: number): void {
    const modalRef: MdbModalRef<unknown> = this.modalService.open(ConfirmComponent, {
      data: { title: 'Delete Role ?' },
      modalClass: 'modal-dialog-centered'
    });

    modalRef.onClose.subscribe((action: MODAL_ACTION) => {
      if (action === MODAL_ACTION.CONFIRM) {
        this.settingsFacade.deleteRole(id);
        this.loadData(); // Temporary solution
      }
    });
  }

  public onUpdateModuleAccess({ id, value }: { id: number, value: boolean }): void {
    this.settingsFacade.updateModulePermissions(id, value);
  }

  private loadData(): void {
    this.settingsFacade.getRoles();
    this.settingsFacade.getModulePermissions(1);

    this.roles$ = this.settingsFacade.roles$;
    this.modules$ = this.dictionaryFacade.modules$;
    this.permissions$ = this.dictionaryFacade.permissions$;
    this.moduleAccessPermissions$ = this.settingsFacade.moduleAccessPermissions$;
  }
}
