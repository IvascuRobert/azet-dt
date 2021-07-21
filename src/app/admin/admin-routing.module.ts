import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from '../core/guards/can-activate.guard';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    {
        path: '',
        // canActivate: [CanActivateGuard],
        component: AdminComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'reviews',
                component: ReviewsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {
    static components = [
        AdminComponent,
        LoginComponent,
        DashboardComponent,
        OrdersComponent,
        ProductsComponent,
        ReviewsComponent,
        AdminHeaderComponent
    ];
}
