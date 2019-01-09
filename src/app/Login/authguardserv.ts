import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardServ implements CanActivate{
    constructor(private _router: Router){
    }

    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean{
        console.log('isLoggedIn : ');
        console.log(sessionStorage.getItem('username'));
        if(sessionStorage.getItem('username')){
            return true;
        }
        this._router.navigate(['/LoginForm'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}