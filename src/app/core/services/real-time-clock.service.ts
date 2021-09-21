import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable()
export class RealTimeClockService {

    private clock: Observable<Date>;

    constructor() {
        this.clock = interval(1000)
            .pipe(
                map(tick => new Date()),
                share()
            );
    }

    getClock(): Observable<Date> {
        return this.clock;
    }
}
