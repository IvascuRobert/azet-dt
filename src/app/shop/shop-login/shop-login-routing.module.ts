import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopLoginComponent } from './shop-login.component';

const routes: Routes = [
    { path: '', component: ShopLoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopLoginRoutingModule {
    static components = [ShopLoginComponent];
}
