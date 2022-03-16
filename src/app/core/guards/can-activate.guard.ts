import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgrxDataLoginService } from 'src/app/shop-authentication/service/login/ngrx-data-login.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(public ngrxDataLoginService: NgrxDataLoginService, public router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.ngrxDataLoginService.isAuthenticated) {
            this.router.navigate(['/admin/dashboard']);
        }

        return true;
    }
}
