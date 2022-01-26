import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const AppRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '',
        loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
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
