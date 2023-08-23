import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CopyLinkComponent } from './components/copy-link/copy-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LayoutShopComponent } from './components/layout-shop/layout-shop.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';
import { MessageComponent } from './components/message/message.component';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { MaterialModule } from './module/material.module';
import { CountTotalQuantityPipe } from './pipes/count-total-quantity.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/form-control-error-interpretation.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { OffcanvasService } from './service/offcanvas.service';
import { AztDtCurrencyPipe } from './pipes/currency.pipe';
import { SidenavCartComponent } from './components/sidenav-cart/sidenav-cart.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

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
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [OffcanvasService, provideNgxMask()],
})
export class SharedModule {}
