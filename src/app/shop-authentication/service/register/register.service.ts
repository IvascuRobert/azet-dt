import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { User } from 'src/app/shared/interface/user-login';

@Injectable({ providedIn: 'root' })
export class RegisterService extends EntityCollectionServiceBase<User> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Register', serviceElementsFactory);
    }
}
