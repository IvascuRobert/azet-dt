import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PopularKnowledgeComponent } from './popular-knowledge/popular-knowledge.component';
import { PopularProductsComponent } from './popular-products/popular-productscomponent';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {
    static components = [
        HomeComponent,
        PopularProductsComponent,
        PopularKnowledgeComponent
    ];
}
