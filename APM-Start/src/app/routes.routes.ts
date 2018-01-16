import { ProductGuardService } from './products/product-guard.service';
import { Routes } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const ROUTES: Routes = [
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent},
    { path: 'welcome', component: WelcomeComponent},
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
