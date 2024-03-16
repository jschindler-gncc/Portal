import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DictionaryActions } from './dictionary.actions';
import { LanguageEntity } from './dictionary.models';
import { Observable } from 'rxjs';
import { selectDictionaryPermissions, selectDictionaryModules, selectDictionaryLanguages } from './dictionary.selectors';
import { IdNameModel } from 'core';

@Injectable()
export class DictionaryFacade {
  permissions$: Observable<IdNameModel[]> = this.store.select(selectDictionaryPermissions);
  modules$: Observable<IdNameModel[]> = this.store.select(selectDictionaryModules);
  languages$: Observable<LanguageEntity[]> = this.store.select(selectDictionaryLanguages);

  constructor(private readonly store: Store) {
    this.store.dispatch(DictionaryActions.loadDictionaries());
  }

  load(): void {
    this.store.dispatch(DictionaryActions.loadDictionaries());
  }
}
