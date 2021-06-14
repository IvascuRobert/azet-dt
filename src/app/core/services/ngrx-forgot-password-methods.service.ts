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
import { IMessage } from 'src/app/shared/interfaces.interface';
import { MessageComponent } from 'src/app/shared/message/message.component';

@Injectable()
export class NgrxForgotPasswordMethodsService extends DefaultDataService<string> {

    constructor(
        http: HttpClient,
        httpUrlGenerator: HttpUrlGenerator,
        private _snackBar: MatSnackBar
    ) {
        super('ForgotPassword', http, httpUrlGenerator);
    }

    add(email: string): Observable<any> {
        return super
            .add(email)
            .pipe(
                map((message) => {
                    this.messageAlert(EnumMessageType.SUCCESS, 'Resetarea efectuată cu succes. Verificați-vă email-ul.');
                    return of(message);
                }),
                catchError((error: DataServiceError) => {
                    const { message } = error;
                    this.messageAlert(EnumMessageType.DANGER, message);
                    return of(error);
                }));
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

}