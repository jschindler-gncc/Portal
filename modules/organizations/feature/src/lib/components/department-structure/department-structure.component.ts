import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationFacade } from 'organizations-data-access';
import { CompanyEntity, DepartmentEntity } from 'organizations-domain';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TreeViewEntity } from 'shared-ui';

@Component({
  selector: 'department-structure',
  templateUrl: './department-structure.component.html',
  styleUrls: ['./department-structure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentStructureComponent {
  public data!: TreeViewEntity[];
  public company$!: Observable<CompanyEntity>;

  private ngUnsubscribe = new Subject<boolean>();

  constructor(
    private organizationFacade: OrganizationFacade,
    private route: ActivatedRoute,
    private router: Router,
    private changeRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const id = this.route.parent?.snapshot.paramMap.get('id');
    if (id) {
      this.organizationFacade.getDepartments(+id);
      this.company$ = this.organizationFacade.company$;
      this.organizationFacade.departments$.pipe(takeUntil(this.ngUnsubscribe)).subscribe((departments) => {
        this.data = this.buildTree(departments);
        this.changeRef.markForCheck();
      });
    }
  }

  public onClick(id: number): void {
    this.router.navigate([`employees/`, id], { relativeTo: this.route });
  }

  private buildTree(departments: DepartmentEntity[], parentId: null | number = null): TreeViewEntity[] {
    const tree = [];
    const children = departments.filter((dep: any) => dep.parentDepartmentId === parentId);
  
    for (const child of children) {
      const node: TreeViewEntity = {
        id: child.id,
        name: child.name,
        count: child.employees, 
        children: [],
      };
  
      const nestedChildren = this.buildTree(departments, child.id);
  
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
