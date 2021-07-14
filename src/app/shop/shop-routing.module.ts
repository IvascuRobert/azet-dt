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
                data: { preload: true },
                loadChildren: () => import('./shop-home/shop-home.module').then(m => m.HomeModule)
            },
            {
                path: 'products',
                data: { preload: true },
                loadChildren: () => import('./shop-products/shop-products.module').then(m => m.ShopProductsModule)
            },
            {
                path: 'products/:id',
                data: { preload: true },
                loadChildren: () => import('../shared/products/products.module').then(m => m.ProductsModule)
            },
            {
                path: 'contact',
                loadChildren: () => import('./shop-contact/shop-contact.module').then(m => m.ContactModule)
            },
            {
                path: 'cart',
                loadChildren: () => import('./shop-cart/shop-cart.module').then(m => m.CartModule)
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
