import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class LoggerService {

    constructor() { }

    log(msg: string): void {
        if (!environment.production) {
            console.log(msg);
        }
        else {
            // AppInsights
        }

    }

    logError(msg: string): void {
        if (!environment.production) {
            console.error(msg);
        }
        else {
            // AppInsights
        }

    }

}
