import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './routes.routes';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/star/star.component';
import { ProductsService } from './product-list/products.service';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ProductsService,
    ProductGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
