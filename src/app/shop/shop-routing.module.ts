import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopFooterComponent } from './shop-footer/shop-footer.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
    {
        path: '',
        component: ShopComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./shop-home/shop-home.module').then(m => m.ShopHomeModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./shop-products/shop-products.module').then(m => m.ShopProductsModule)
            },
            {
                path: 'products/:id',
                loadChildren: () => import('./shop-product/shop-product.module').then(m => m.ShopProductModule)
            },
            {
                path: 'contact',
                loadChildren: () => import('./shop-contact/shop-contact.module').then(m => m.ShopContactModule)
            },
            {
                path: 'cart',
                loadChildren: () => import('./shop-cart/shop-cart.module').then(m => m.ShopCartModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/home'
            },
            // catch any unfound routes and redirect to home page
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: '/home'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopRoutingModule {
    static components = [
        ShopComponent,
        ShopHeaderComponent,
        ShopFooterComponent
    ];
}
