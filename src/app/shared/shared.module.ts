import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CopyLinkComponent } from './components/copy-link/copy-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LayoutShopComponent } from './components/layout-shop/layout-shop.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';
import { MessageComponent } from './components/message/message.component';
import { SidenavCartComponent } from './components/sidenav-cart/sidenav-cart.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { MaterialModule } from './module/material.module';
import { CountTotalDiscountPipe } from './pipes/count-total-discount.pipe';
import { CountTotalPricePipe } from './pipes/count-total-price.pipe';
import { CountTotalQuantityPipe } from './pipes/count-total-quantity.pipe';
import { CountTotalTaxPipe } from './pipes/count-total-tax.pipe';
import { AztDtCurrencyPipe } from './pipes/currency.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/form-control-error-interpretation.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { OffcanvasService } from './service/offcanvas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  declarations: [
    MessageComponent,
    TrimPipe,
    FormControlErrorInterpretationPipe,
    LogoIconComponent,
    CopyLinkComponent,
    LayoutShopComponent,
    FooterComponent,
    LayoutAdminComponent,
    HeaderComponent,
    SidenavMenuComponent,
    BreadcrumbComponent,
    CountTotalQuantityPipe,
    AztDtCurrencyPipe,
    CountTotalPricePipe,
    CountTotalDiscountPipe,
    CountTotalTaxPipe,
    SidenavCartComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    MessageComponent,
    TrimPipe,
    FormControlErrorInterpretationPipe,
    LogoIconComponent,
    CopyLinkComponent,
    LayoutShopComponent,
    FooterComponent,
    LayoutAdminComponent,
    HeaderComponent,
    SidenavMenuComponent,
    CountTotalQuantityPipe,
    AztDtCurrencyPipe,
    CountTotalPricePipe,
    CountTotalDiscountPipe,
    CountTotalTaxPipe,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [OffcanvasService, provideNgxMask()],
})
export class SharedModule {}
