import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgrxLoginMethodsService } from 'src/app/core/services/ngrx-login-methods.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(public ngrxLoginMethodsService: NgrxLoginMethodsService, public router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.ngrxLoginMethodsService.isAuthenticated) {
            this.router.navigate(['/admin/dashboard']);
        }

        return true;
    }
}
