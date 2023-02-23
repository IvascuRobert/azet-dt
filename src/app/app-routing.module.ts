import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';
import { LayoutShopComponent } from './shared/components/layout-shop/layout-shop.component';

const AppRoutes: Routes = [
  {
    path: 'home',
    component: LayoutShopComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
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
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes, {
      preloadingStrategy: PreloadModulesStrategy,
      // useHash: !environment.production,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [PreloadModulesStrategy],
})
export class AppRoutingModule { }
