
import { Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuardService } from './product-guard.service';



export const ROUTES_PRODUCTS: Routes = [
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent}
];
