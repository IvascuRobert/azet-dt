import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    DefaultDataService,
    HttpUrlGenerator
} from '@ngrx/data';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MessageComponent } from 'src/app/shared/components/message/message.component';
import { LocalStorageKey } from 'src/app/shared/enum/local-storage-key';
import { MessageType } from 'src/app/shared/enum/message-type';
import { Message } from 'src/app/shared/interface/message';
import { User } from 'src/app/shared/interface/user-login';

@Injectable()
export class NgrxDataRegisterService extends DefaultDataService<User> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        private _snackBar: MatSnackBar
    ) {
        super('Register', http, httpUrlGenerator);
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
                    this.messageAlert(MessageType.SUCCESS, 'Înregistrare efectuată cu succes.');
                    return this.mapUserLoggedIn(user);
                }),
                catchError((error) => {
                    const { message } = error;
                    this.messageAlert(MessageType.DANGER, message);
                    return of(error);
                })
            );
    }

    messageAlert(type: MessageType, message: string | null) {
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
}