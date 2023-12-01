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

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard {
  private router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
    if (token) {
      this.router.navigate([ROUTE_PATH.DASHBOARD]);
      return false;
    } else {
      return true;
    }
  }
}
