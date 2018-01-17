import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarComponent } from './../shared/star/star.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-space.pipe';

import { ProductGuardService } from './product-guard.service';
import { ROUTES_PRODUCTS } from './product.routes';
import { ProductsService } from './products.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES_PRODUCTS)
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  providers: [
    ProductsService,
    ProductGuardService
  ]
})
export class ProductModule { }