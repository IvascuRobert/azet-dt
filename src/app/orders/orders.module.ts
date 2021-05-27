import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [
        OrdersRoutingModule,
        SharedModule
    ],
    declarations: [
        OrdersRoutingModule.components
    ]
})

export class OrdersModule { }
