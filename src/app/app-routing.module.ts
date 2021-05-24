import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'products/:id', data: { preload: true }, loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'knowledge', loadChildren: () => import('./product-knowledge/product-knowledge.module').then(m => m.ProductKnowledgeModule) },
    { path: '**', pathMatch: 'full', redirectTo: '/home' } // catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            AppRoutes,
            {
                preloadingStrategy: PreloadModulesStrategy,
                relativeLinkResolution: 'legacy'
            }
        )
    ],
    exports: [RouterModule],
    providers: [PreloadModulesStrategy]
})

export class AppRoutingModule { }
