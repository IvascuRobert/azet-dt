import { Injectable, TrackByFunction } from '@angular/core';
import { ProductClass } from 'src/app/shared/classes.class';

@Injectable()
export class TrackByService {

    product(index: number, item: ProductClass): string {
        return item.id;
    }

    trackByValue(index: number, item: any): string {
        return item.value;
    }
}
