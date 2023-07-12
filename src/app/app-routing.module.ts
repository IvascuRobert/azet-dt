import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';
import { LayoutShopComponent } from './shared/components/layout-shop/layout-shop.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: LayoutShopComponent,
    loadChildren: () =>
      import('./shop-home/shop-home.module').then((m) => m.ShopHomeModule),
  },
  {
    path: 'products',
    component: LayoutShopComponent,
    loadChildren: () =>
      import('./shop-products/shop-products.module').then(
        (m) => m.ShopProductsModule
      ),
  },
  {
    path: 'contact',
    component: LayoutShopComponent,
    loadChildren: () =>
      import('./shop-contact/shop-contact.module').then(
        (m) => m.ShopContactModule
      ),
  },
  {
    path: 'cart',
    component: LayoutShopComponent,
    loadChildren: () =>
      import('./shop-cart/shop-cart.module').then((m) => m.ShopCartModule),
  },
  {
    path: 'authentication',
    component: LayoutShopComponent,
    loadChildren: () =>
      import('./shop-authentication/shop-authentication.module').then(
        (m) => m.ShopAuthenticationModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadModulesStrategy,
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy],
})
export class AppRoutingModule {}
