import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { FragranceCardComponent } from './components/fragrance-card/fragrance-card.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "fragrances", component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
