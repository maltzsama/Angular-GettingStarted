import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuardService } from './product-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent},
            { path: 'products/:id',
                canActivate: [ ProductGuardService ],
                component: ProductDetailComponent
            }
        ])
    ],
    exports: [ RouterModule ]
})

export class ProductRoutingModule { }
