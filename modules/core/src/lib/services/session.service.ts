import { Injectable } from '@angular/core';
import { ROLE } from '../enums/role.enum';
import { LOCAL_STORAGE } from '../enums/local-storage.enum';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public setSession(auth: any): void {
    localStorage.setItem(LOCAL_STORAGE.TOKEN, auth.accessToken);
    localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(auth.user));
  }

  public isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER) as string);

    return user?.role === ROLE.ADMIN;
  }
}