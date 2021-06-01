import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    DefaultDataService,
    HttpUrlGenerator
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserLogin } from 'src/app/shared/interfaces.interface';

@Injectable()
export class NgrxLoginMethodsService extends DefaultDataService<IUserLogin> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator
    ) {
        super('Login', http, httpUrlGenerator);
    }

    add(user: IUserLogin): Observable<IUserLogin> {
        return super
            .add(user)
            .pipe(map(user => this.mapUserLoggedIn(user)));
    }

    private mapUserLoggedIn(user: any): IUserLogin {
        return { ...user, id: user.userId }; // from mongo db key of identifier comes userId and NGRX-DATA want id
    }
}