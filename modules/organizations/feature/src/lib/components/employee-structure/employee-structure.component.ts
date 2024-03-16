import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationFacade } from 'organizations-data-access';
import { EmployeeEntity } from 'organizations-domain';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TreeViewEntity } from 'shared-ui';

@Component({
  selector: 'employee-structure',
  templateUrl: './employee-structure.component.html',
  styleUrls: ['./employee-structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeStructureComponent {
  public data!: TreeViewEntity[];
  public departmentName$!: Observable<string | undefined>;

  private ngUnsubscribe = new Subject<boolean>();

  constructor(
    private organizationFacade: OrganizationFacade,
    private route: ActivatedRoute,
    private changeRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('departmentId');
    if (id) {
      this.departmentName$ = this.organizationFacade.getDepartmentNameById(Number(id));
      this.organizationFacade.getEmployees(Number(id));
      this.organizationFacade.employees$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((employees) => {
        this.data = this.buildTree(employees);
        this.changeRef.markForCheck();
      });
    }
  }

  private buildTree(employees: EmployeeEntity[], parentId: null | number = null): TreeViewEntity[] {
    const tree = [];
    const children = employees.filter((dep: any) => dep.managerId === parentId);
  
    for (const child of children) {
      const node: TreeViewEntity = {
        id: child.id,
        label: child.position,
        name: child.name,
        avatar: child.avatar,
        children: [],
      };
  
      const nestedChildren = this.buildTree(employees, child.id);
  
      if (nestedChildren.length) {
        node.children = nestedChildren;
      }
  
      tree.push(node);
    }
  
    return tree;
  }

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
