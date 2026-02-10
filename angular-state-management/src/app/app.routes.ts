// app.routes.ts
import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Orders } from './components/orders/orders';
import { Welcome } from './components/welcome/welcome';

export const routes: Routes = [
  { path: '', component: Welcome },
  { path: 'products', component: Products },
  { path: 'orders', component: Orders }
];
