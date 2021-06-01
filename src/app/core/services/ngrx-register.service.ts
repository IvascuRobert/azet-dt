import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { IUserLogin } from 'src/app/shared/interfaces.interface';

@Injectable({ providedIn: 'root' })
export class NgrxRegisterService extends EntityCollectionServiceBase<IUserLogin> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Register', serviceElementsFactory);
    }
}
