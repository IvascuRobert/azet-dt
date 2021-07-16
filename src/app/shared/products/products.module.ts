import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbProgressbarModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  imports: [
    ProductsRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    NgbRatingModule,
    NgbProgressbarModule,
  ],
  declarations: [ProductsRoutingModule.components]
})

export class ProductsModule { }
