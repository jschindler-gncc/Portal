import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from 'smart-webcomponents-angular/input';
import { PasswordTextBoxModule } from 'smart-webcomponents-angular/passwordtextbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';

const modules = [ButtonModule, InputModule, PasswordTextBoxModule];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class UiModule {}
