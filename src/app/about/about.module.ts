import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
    imports: [AboutRoutingModule, SharedModule],
    declarations: [AboutRoutingModule.components]
})
export class AboutModule { }
