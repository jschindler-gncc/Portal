import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = environment.url;

  constructor(private http: HttpClient) {}

  get<T>(url: string, options = {}): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}${url}`, options)
      .pipe(catchError(e => this.handleError(e)));
  }

  post<T>(url: string, body: any): Observable<T> {
    console.log(this.baseUrl + url);
    return this.http
      .post<T>(this.baseUrl + url, body)
      .pipe(catchError(e => this.handleError(e)));
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.http
      .put<T>(this.baseUrl + url, body)
      .pipe(catchError(e => this.handleError(e)));
  }

  delete<T>(url: string): Observable<T> {
    return this.http
      .delete<T>(this.baseUrl + url)
      .pipe(catchError(e => this.handleError(e)));
  }

  private handleError(e: any) {
    if (e.status === 500) {
      return throwError({
        isSuccess: false,
        result: 'System error occurred, please contact support',
      });
    }
    return throwError(e.error);
  }
}
