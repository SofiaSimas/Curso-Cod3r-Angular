import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './viwes/home/home.component';
import { ProductCrudComponent } from './viwes/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductCrudComponent
  },
  {
    path:"products/create",
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
