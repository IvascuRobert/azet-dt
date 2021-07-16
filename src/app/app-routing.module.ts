import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    // catch any unfound routes and redirect to home page
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
