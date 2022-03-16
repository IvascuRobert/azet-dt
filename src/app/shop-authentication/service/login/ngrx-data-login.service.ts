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
import { MessageComponent } from 'src/app/shared/components/message/message.component';
import { LocalStorageKey } from 'src/app/shared/enum/local-storage-key';
import { MessageType } from 'src/app/shared/enum/message-type';
import { Message } from 'src/app/shared/interface/message';
import { User } from 'src/app/shared/interface/user-login';

@Injectable()
export class NgrxDataLoginService extends DefaultDataService<User> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {
        super('Login', http, httpUrlGenerator);
    }

    add(user: User): Observable<User> {
        return super
            .add(user)
            .pipe(
                map((user) => {
                    const { accessToken } = user;
                    if (accessToken) {
                        localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, accessToken);
                    }
                    this.messageAlert(MessageType.SUCCESS, 'Autentificare efectuată cu succes.');
                    this.router.navigateByUrl('/admin-dashboard');
                    return this.mapUserLoggedIn(user);
                })
            );
    }

    messageAlert(type: MessageType, message: string) {
        this._snackBar.openFromComponent(MessageComponent, {
            duration: 5000,
            data: <Message>{
                type,
                message
            }
        });
    }

    private mapUserLoggedIn(user: any): User {
        return { ...user, id: user.userId }; // from mongo db key of identifier comes userId and NGRX-DATA want id
    }

    public get isAuthenticated(): boolean {
        return localStorage.getItem(LocalStorageKey.ACCESS_TOKEN) !== null;
    }
}