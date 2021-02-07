import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router'
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ) {
        
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        throw new Error('Method not implemented.');
    }
   
}