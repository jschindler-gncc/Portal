import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DictionaryResponse } from '../+state/dictionary.models';
import { HttpService } from 'core';

@Injectable()
export class DictionaryService {
  private pathUrl = '';

  constructor(private http: HttpService) {}

  public getDictionaries(): Observable<DictionaryResponse> {
    return this.http.get(this.pathUrl + 'dictionaries', {});
  }
}