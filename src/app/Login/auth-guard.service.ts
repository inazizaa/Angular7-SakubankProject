import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
    constructor(private _router: Router){
    }

    canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean{
        console.log('isLoggedIn : ');
        console.log(sessionStorage.getItem('customernumber'));
        if(sessionStorage.getItem('customernumber')){
            return true;
        }
        this._router.navigate(['/LoginForm'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}