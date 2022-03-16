import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopContactRoutingModule } from './shop-contact-routing.module';
import { ShopContactComponent } from './shop-contact.component';

@NgModule({
    imports: [
        ShopContactRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [ShopContactComponent]
})
export class ShopContactModule { }
