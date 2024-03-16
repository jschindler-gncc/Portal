import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IdNameModel } from 'core';
import { Observable, map } from 'rxjs';
import { ModuleAccessPermissionEntity } from 'settings-data-access';
@Component({
  selector: 'module-permission',
  templateUrl: './module-permission.component.html',
  styleUrls: ['./module-permission.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulePermissionComponent implements OnInit {
  @Input() roleId!: number;
  @Input() modules$!: Observable<IdNameModel[]>;
  @Input() permissions$!: Observable<IdNameModel[]>;
  @Input() moduleAccessPermissions$!: Observable<ModuleAccessPermissionEntity[]>;
  @Output() updateModuleAccess = new EventEmitter<{ id: number, value: boolean }>();

  modulePermissionByRoleId$!: Observable<ModuleAccessPermissionEntity[] | undefined>;

  ngOnInit(): void {
    this.modulePermissionByRoleId$ = this.moduleAccessPermissions$.pipe(map((items: ModuleAccessPermissionEntity[]) => {
      return items.filter((item) => item.roleId === this.roleId);
    }))
  }

  public onUpdateModuleAccess(value: boolean, id: number): void {
    this.updateModuleAccess.next({ id, value });
  }
}
