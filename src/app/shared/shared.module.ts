import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoIconComponent } from './logo-icon/logo-icon.component';
import { MessageComponent } from './message/message.component';
import { AzetDTCurrencyPipe } from './pipes/currency.pipe';
import { FormControlErrorInterpretationPipe } from './pipes/formControlErrorInterpretation.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { ProductsCardComponent } from './products-card/products-card.component';
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
        MatRippleModule
    ],
    declarations: [
        MessageComponent,
        TrimPipe,
        AzetDTCurrencyPipe,
        FormControlErrorInterpretationPipe,
        ProductsCardComponent,
        SocialMediaIconsComponent,
        LogoIconComponent
    ],
    exports: [
        CommonModule,
        MessageComponent,
        TrimPipe,
        AzetDTCurrencyPipe,
        FormControlErrorInterpretationPipe,
        ProductsCardComponent,
        SocialMediaIconsComponent,
        LogoIconComponent
    ]
})
export class SharedModule { }
