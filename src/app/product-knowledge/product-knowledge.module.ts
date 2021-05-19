import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductKnowledgeRoutingModule } from './product-knowledge-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductKnowledgeRoutingModule,
  ],
  declarations: [ProductKnowledgeRoutingModule.components]
})

export class ProductKnowledgeModule { }
