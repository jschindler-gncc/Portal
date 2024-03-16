import { Injectable, inject } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../enums/route-path.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pathUrl = '';
  private http = inject(HttpService);
  private router = inject(Router);

  login(auth: any): Observable<any> {
    return this.http.post(this.pathUrl + 'login', auth);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.pathUrl + 'register', user);
  }

  forgotPassword(email: any): Observable<any> {
    return this.http.post(this.pathUrl + 'forgotPassword', email);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate([ROUTE_PATH.AUTH]);
  }
}