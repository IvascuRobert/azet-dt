import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    DataServiceError,
    DefaultDataService,
    HttpUrlGenerator
} from '@ngrx/data';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EnumMessageType } from 'src/app/shared/enums.enum';
import { IMessage, IUserLogin } from 'src/app/shared/interfaces.interface';
import { MessageComponent } from 'src/app/shared/message/message.component';

@Injectable()
export class NgrxRegisterMethodsService extends DefaultDataService<IUserLogin> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        private _snackBar: MatSnackBar
    ) {
        super('Register', http, httpUrlGenerator);
    }

    add(user: IUserLogin): Observable<IUserLogin> {
        return super
            .add(user)
            .pipe(
                map((user) => {
                    const { accessToken } = user;
                    localStorage.setItem('access_token', accessToken);
                    this.messageAlert(EnumMessageType.SUCCESS, 'Înregistrare efectuată cu succes.');
                    return this.mapUserLoggedIn(user);
                }),
                catchError((error: DataServiceError) => {
                    const { message } = error;
                    this.messageAlert(EnumMessageType.DANGER, message);
                    return of(error);
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
}