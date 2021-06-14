import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgrxLoginMethodsService } from '../services/ngrx-login-methods.service';

@Injectable()
export class CanActivateLoginGuard implements CanActivate {

    constructor(public ngrxLoginMethodsService: NgrxLoginMethodsService, public router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.ngrxLoginMethodsService.isAuthenticated, 'this.auth.isAuthenticated')
        if (this.ngrxLoginMethodsService.isAuthenticated) {
            this.router.navigate(['/profile']);
            return false;
        }

        return true;
    }
}