import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-space.pipe';

import { ProductGuardService } from './product-guard.service';
import { ProductsService } from './products.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({

  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],

  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  providers: [
    ProductsService,
    ProductGuardService
  ]
})
export class ProductModule { }
