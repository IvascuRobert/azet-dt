import { NgModule } from '@angular/core';
import { NgbProgressbarModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    exports: [
        NgbProgressbarModule,
        NgbTimepickerModule
    ]
})
export class BootstrapModule { }
