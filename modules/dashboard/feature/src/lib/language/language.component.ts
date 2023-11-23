import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE, LOCAL_STORAGE } from 'core';
import { LanguageEntity } from 'dashboard-data-access';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit, OnChanges {
  @Input() items!: LanguageEntity[];
  public currentLang!: string | null;
  public iconFlag!: string | null;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = localStorage.getItem(LOCAL_STORAGE.LANGUAGE) || LANGUAGE.EN;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.iconFlag = this.items.find((item: LanguageEntity) => item.code === this.currentLang)?.icon || null;
    }
  }

  selectLanguage(lang: string, icon: string) {
    localStorage.setItem(LOCAL_STORAGE.LANGUAGE, lang);
    this.currentLang = lang;
    this.iconFlag = icon;
    this.translateService.use(lang);
  }
}
