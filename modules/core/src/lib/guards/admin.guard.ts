import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LOCAL_STORAGE } from '../enums/local-storage.enum';
import { ROUTE_PATH } from '../enums/route-path.enum';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  private router = inject(Router);
  private sessionService = inject(SessionService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
    const isAdmin = this.sessionService.isAdmin();

    if (token) {
      if (isAdmin) {
        return true;
      } else {
        this.router.navigate([ROUTE_PATH.DASHBOARD]);
        return false;
      }
    } else {
      this.router.navigate([ROUTE_PATH.AUTH]);
      return false;
    }
  }
}
