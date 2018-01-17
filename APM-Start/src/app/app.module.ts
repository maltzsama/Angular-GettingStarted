import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { ROUTES } from './router.routes';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
