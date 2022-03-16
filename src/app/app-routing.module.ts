import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const AppRoutes: Routes = [
    // catch any unfound routes and redirect to home page
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        loadChildren: () => import('./shop-home/shop-home.module').then(m => m.ShopHomeModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./shop-products/shop-products.module').then(m => m.ShopProductsModule)
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
        path: 'authentication',
        loadChildren: () => import('./shop-authentication/shop-authentication.module').then(m => m.ShopAuthenticationModule)
    },
    {
        path: 'admin-authentication',
        loadChildren: () => import('./admin-authentication/admin-authentication.module').then(m => m.AdminAuthenticationModule)
    },
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    // {
    //     path: 'orders',
    //     component: OrdersComponent
    // },
    // {
    //     path: 'products',
    //     component: ProductsComponent
    // },
    // {
    //     path: 'reviews',
    //     component: ReviewsComponent
    // },
    // catch any unfound routes and redirect to home page
    // the path bellow must to be last
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            AppRoutes,
            {
                preloadingStrategy: PreloadModulesStrategy,
                relativeLinkResolution: 'legacy',
                // useHash: !environment.production,
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled'
            }
        )
    ],
    exports: [RouterModule],
    providers: [PreloadModulesStrategy]
})

export class AppRoutingModule { }
