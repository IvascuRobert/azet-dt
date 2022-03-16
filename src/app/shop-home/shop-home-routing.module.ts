import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopHomeComponent } from './shop-home.component';

const routes: Routes = [
    { path: '', component: ShopHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShopHomeRoutingModule {

}
