import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/service/authentication.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

    constructor(public authenticationService: AuthenticationService, public router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authenticationService.isAuthenticated) {
            this.router.navigate(['/admin/dashboard']);
        }

        return true;
    }
}
