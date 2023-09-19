import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'smart-webcomponents-angular/form';
import { ButtonModule } from 'smart-webcomponents-angular/button';

@NgModule({
  imports: [
    CommonModule,
    MdbFormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
  ],
  exports: [MdbFormsModule, ReactiveFormsModule, FormModule,
    ButtonModule],
})
export class UiModule {}
