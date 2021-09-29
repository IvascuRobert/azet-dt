import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
    DefaultDataService,
    HttpUrlGenerator
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnumLocalStorageKeysName, EnumMessageType } from 'src/app/shared/enums.enum';
import { IMessage, IUserLogin } from 'src/app/shared/interfaces.interface';
import { MessageComponent } from 'src/app/shared/message/message.component';

@Injectable()
export class NgrxLoginMethodsService extends DefaultDataService<IUserLogin> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {
        super('Login', http, httpUrlGenerator);
    }

    add(user: IUserLogin): Observable<IUserLogin> {
        return super
            .add(user)
            .pipe(
                map((user) => {
                    const { accessToken } = user;
                    if (accessToken) {
                        localStorage.setItem(EnumLocalStorageKeysName.ACCESS_TOKEN, accessToken);
                    }
                    this.messageAlert(EnumMessageType.SUCCESS, 'Autentificare efectuată cu succes.');
                    this.router.navigateByUrl('/admin-dashboard');
                    return this.mapUserLoggedIn(user);
                })
            );
    }

    messageAlert(type: EnumMessageType, message: string) {
        this._snackBar.openFromComponent(MessageComponent, {
            duration: 5000,
            data: <IMessage>{
                type,
                message
            }
        });
    }

    private mapUserLoggedIn(user: any): IUserLogin {
        return { ...user, id: user.userId }; // from mongo db key of identifier comes userId and NGRX-DATA want id
    }

    public get isAuthenticated(): boolean {
        return localStorage.getItem(EnumLocalStorageKeysName.ACCESS_TOKEN) !== null;
    }
}