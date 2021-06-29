import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgrxLoginMethodsService } from '../services/ngrx-login-methods.service';

@Injectable()
export class CanActivateAdminLoginGuard implements CanActivate {

    constructor(public ngrxLoginMethodsService: NgrxLoginMethodsService, public router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.ngrxLoginMethodsService.isAuthenticated) {
            return true;
        }

        this.router.navigate(['/admin-login']);
        return false;
    }
}