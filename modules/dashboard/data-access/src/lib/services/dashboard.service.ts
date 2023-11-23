import { Injectable, inject } from '@angular/core';
import { HttpService } from 'core';
import { Observable } from 'rxjs';
import { DashboardResponse } from '../+state/dashboard.models';

@Injectable()
export class DashboardService {
  private pathUrl = '';
  private http = inject(HttpService);

  public getDashboardConfig(data: unknown): Observable<DashboardResponse> {
    return this.http.get(this.pathUrl + 'config', {});
  }
}