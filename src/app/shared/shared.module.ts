import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LogoIconComponent } from './logo-icon/logo-icon.component';
import { MessageComponent } from './message/message.component';
import { AzetDTCurrencyPipe } from './pipes/currency.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/formControlErrorInterpretation.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { ProductStateComponent } from './product-state/product-state.component';
import { ProductsCardComponent } from './products-card/products-card.component';
import { CopyLinkComponent } from './share-link/copy-link.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule,
        MatChipsModule,
        NgbProgressbarModule,
        MatRippleModule,
        MatProgressBarModule,
        MatListModule,
        ClipboardModule
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
        CopyLinkComponent
    ],
    exports: [
        CommonModule,
        MessageComponent,
        TrimPipe,
        AzetDTCurrencyPipe,
        FormControlErrorInterpretationPipe,
        ProductsCardComponent,
        SocialMediaIconsComponent,
        LogoIconComponent,
        ProductStateComponent,
        ContactListComponent,
        CopyLinkComponent
    ]
})
export class SharedModule { }
