import { Injectable } from '@angular/core';
import { HttpService } from 'core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pathUrl = 'auth/';

  constructor(
    private http: HttpService
  ) { }

  login(user: any): Observable<any> {
    return this.http.post(this.pathUrl, user);
  }
}
