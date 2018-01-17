import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-space.pipe';

import { ProductGuardService } from './product-guard.service';
import { ROUTES_PRODUCTS } from './product.routes';
import { ProductsService } from './products.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES_PRODUCTS),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  providers: [
    ProductsService,
    ProductGuardService
  ]
})
export class ProductModule { }