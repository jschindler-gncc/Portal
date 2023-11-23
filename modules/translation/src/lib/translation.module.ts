import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LANGUAGE, LOCAL_STORAGE } from 'core';

export const TRANSLATION_CONFIG = new InjectionToken<TranslateModuleConfig>('TRANSLATION_CONFIG');
export function createTranslateLoader(http: HttpClient, name: string) {
  return new TranslateHttpLoader(http, `./assets/i18n/${name}/`, '.json');
}
@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient, TRANSLATION_CONFIG],
      },
      defaultLanguage: localStorage.getItem(LOCAL_STORAGE.LANGUAGE)?.toString() || LANGUAGE.EN,
      isolate: true,
    }),
  ],
  exports: [TranslateModule],
})
export class TranslationModule {
  static forChild(moduleName: string): ModuleWithProviders<TranslationModule> {
    return {
      ngModule: TranslationModule,
      providers: [
        { provide: TRANSLATION_CONFIG, useValue: moduleName },
      ],
    };
  }
}
