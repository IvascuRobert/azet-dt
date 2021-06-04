import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    DefaultDataService,
    HttpUrlGenerator
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserLogin } from 'src/app/shared/interfaces.interface';
import { AuthService } from './auth.service';

@Injectable()
export class NgrxLoginMethodsService extends DefaultDataService<IUserLogin> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        private authService: AuthService,
        private router: Router
    ) {
        super('Login', http, httpUrlGenerator);
    }

    add(user: IUserLogin): Observable<IUserLogin> {
        return super
            .add(user)
            .pipe(map((user) => {
                const { accessToken } = user;

                this.router.navigateByUrl('/');
                this.authService.saveToken(accessToken);
                return this.mapUserLoggedIn(user);
            }));
    }

    private mapUserLoggedIn(user: any): IUserLogin {
        return { ...user, id: user.userId }; // from mongo db key of identifier comes userId and NGRX-DATA want id
    }
}