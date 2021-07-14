import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from 'src/app/core/guards/can-activate.guard';
import { ProductAdminViewComponent } from './product-admin-view/product-admin-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            {
                path: 'edit',
                component: ProductEditComponent,
                canActivate: [CanActivateGuard]
            },
            {
                path: 'view',
                component: ProductViewComponent
            },
            {
                path: 'admin-view',
                component: ProductAdminViewComponent,
                canActivate: [CanActivateGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [CanActivateGuard]
})

export class ProductsRoutingModule {
    static components = [
        ProductsComponent,
        ProductViewComponent,
        ProductAdminViewComponent,
        ProductEditComponent
    ];
}
