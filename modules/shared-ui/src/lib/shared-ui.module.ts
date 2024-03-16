import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ToastModule } from './toast/toast.module';
import { ModalModule } from './modal/modal.module';
import { BreadcrumbsModule } from './breadcrumbs/breadcrumbs.module';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
    MdbFormsModule, 
    ToastModule,
    ModalModule, 
    BreadcrumbsModule,
  ],
  declarations: [TreeViewComponent],
  exports: [
    MdbFormsModule, 
    ToastModule, 
    ModalModule, 
    BreadcrumbsModule,
    TreeViewComponent,
  ],
})
export class SharedUiModule {}
