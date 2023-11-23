import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateInstant',
  pure: false,
})
export class TranslateInstantPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: string, path?: string): string {
    return this.translate.instant(`${path}.${value}`);
  }
}
