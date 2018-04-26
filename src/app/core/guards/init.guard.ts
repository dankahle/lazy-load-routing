import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Store} from "../../store/store";
import 'rxjs/add/observable/of';

@Injectable()
export class InitGuard implements CanActivate {

  constructor(private store: Store) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.store.initialized) {
      console.log('init guard: bypass init')
      return true;
    }
    return this.init();
  }

  init(): Observable<boolean> {
    console.log('init guard: called init')
    this.store.initialized = true;
    return Observable.of(true)
  }
}


