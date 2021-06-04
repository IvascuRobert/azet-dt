import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CanActivateLoginGuard implements CanActivate {

    constructor(public auth: AuthService, public router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.auth.isAuthenticated(), 'this.auth.isAuthenticated()')
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['/profile']);
            return false;
        }

        return true;
    }
}