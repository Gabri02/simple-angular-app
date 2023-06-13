import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingsComponent } from './components/shippings/shippings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'products-list/:id', component: ProductPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shippings', component: ShippingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
