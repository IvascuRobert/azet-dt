import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordService extends EntityCollectionServiceBase<string> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('ForgotPassword', serviceElementsFactory);
    }
}
