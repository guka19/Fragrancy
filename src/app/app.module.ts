import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ProductsComponent } from './pages/products/products.component';
import { FragranceCardComponent } from './components/fragrance-card/fragrance-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductsComponent,
    FragranceCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
