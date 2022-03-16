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
import { MessageComponent } from 'src/app/shared/components/message/message.component';
import { MessageType } from 'src/app/shared/enum/message-type';
import { Message } from 'src/app/shared/interface/message';

@Injectable()
export class NgrxDataForgotPasswordService extends DefaultDataService<string> {

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
                    this.messageAlert(MessageType.SUCCESS, 'Resetarea efectuată cu succes. Verificați-vă email-ul.');
                    return of(message);
                }),
                catchError((error: DataServiceError) => {
                    const { message } = error;
                    this.messageAlert(MessageType.DANGER, message);
                    return of(error);
                }));
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

}