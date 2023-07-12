import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { CopyLinkComponent } from './components/copy-link/copy-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { LayoutShopComponent } from './components/layout-shop/layout-shop.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';
import { MessageComponent } from './components/message/message.component';
import { SocialMediaIconsComponent } from './components/social-media-icons/social-media-icons.component';
import { MaterialModule } from './module/material.module';
import { AzetDTCurrencyPipe } from './pipes/currency.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/form-control-error-interpretation.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { OffcanvasService } from './service/offcanvas.service';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    MessageComponent,
    TrimPipe,
    AzetDTCurrencyPipe,
    FormControlErrorInterpretationPipe,
    SocialMediaIconsComponent,
    LogoIconComponent,
    ContactListComponent,
    CopyLinkComponent,
    LayoutShopComponent,
    FooterComponent,
    LayoutAdminComponent,
    HeaderComponent,
    SidenavListComponent,
    BreadcrumbComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    MessageComponent,
    TrimPipe,
    AzetDTCurrencyPipe,
    FormControlErrorInterpretationPipe,
    SocialMediaIconsComponent,
    LogoIconComponent,
    ContactListComponent,
    CopyLinkComponent,
    LayoutShopComponent,
    FooterComponent,
    LayoutAdminComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  providers: [
    OffcanvasService
  ]
})
export class SharedModule { }
