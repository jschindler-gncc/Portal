import { Injectable, inject } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private pathUrl = '';
  private http = inject(HttpService);

  login(auth: any): Observable<any> {
    return this.http.post(this.pathUrl + 'login', auth);
  }

  register(user: any): Observable<any> {
    return this.http.post(this.pathUrl + 'register', user);
  }

  forgotPassword(email: any): Observable<any> {
    return this.http.post(this.pathUrl + 'forgotPassword', email);
  }

  getToken(): string | null{
    return localStorage.getItem('');
  }

  logout(): void {
    console.log('LOGOUT');
  }
}