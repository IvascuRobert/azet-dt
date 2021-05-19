import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductKnowledgeComponent } from './product-knowledge.component';

const routes: Routes = [
    { path: '', component: ProductKnowledgeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductKnowledgeRoutingModule {
    static components = [ProductKnowledgeComponent];
}
