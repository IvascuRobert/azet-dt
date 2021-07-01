import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    { path: '', component: AdminDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminDashboardRoutingModule {
    static components = [
        AdminDashboardComponent,
        DashboardComponent,
        OrdersComponent,
        ProductsComponent,
        ReviewsComponent
    ];
}
