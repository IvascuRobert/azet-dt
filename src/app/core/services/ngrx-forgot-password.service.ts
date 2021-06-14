import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class NgrxForgotPasswordService extends EntityCollectionServiceBase<string> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('ForgotPassword', serviceElementsFactory);
    }
}
