import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { DialogContentScheduleInServiceComponent } from './components/dialog-content-schedule-in-service/dialog-content-schedule-in-service.component';
import { DialogContentScheduleComponent } from './components/dialog-content-schedule/dialog-content-schedule.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutShopComponent } from './components/layout-shop/layout-shop.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';
import { MessageComponent } from './components/message/message.component';
import { ProductStateComponent } from './components/product-state/product-state.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { CopyLinkComponent } from './components/share-link/copy-link.component';
import { SocialMediaIconsComponent } from './components/social-media-icons/social-media-icons.component';
import { BootstrapModule } from './module/bootstrap.module';
import { MaterialModule } from './module/material.module';
import { AzetDTCurrencyPipe } from './pipes/currency.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/form-control-error-interpretation.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MaterialModule,
        BootstrapModule
    ],
    declarations: [
        MessageComponent,
        TrimPipe,
        AzetDTCurrencyPipe,
        FormControlErrorInterpretationPipe,
        ProductsCardComponent,
        SocialMediaIconsComponent,
        LogoIconComponent,
        ProductStateComponent,
        ContactListComponent,
        CopyLinkComponent,
        DialogContentScheduleComponent,
        DialogContentScheduleInServiceComponent,
        LayoutShopComponent,
        FooterComponent,
        LayoutAdminComponent,
        HeaderComponent
    ],
    exports: [
        CommonModule,
        MaterialModule,
        BootstrapModule,
        MessageComponent,
        TrimPipe,
        AzetDTCurrencyPipe,
        FormControlErrorInterpretationPipe,
        ProductsCardComponent,
        SocialMediaIconsComponent,
        LogoIconComponent,
        ProductStateComponent,
        ContactListComponent,
        CopyLinkComponent,
        DialogContentScheduleComponent,
        DialogContentScheduleInServiceComponent,
        LayoutShopComponent,
        FooterComponent,
        LayoutAdminComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
