import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/user/home-page/home-page.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  // {
  //   path: "admin", component: AdminPageComponent, children: [
  //     {
  //       path: "", redirectTo: "product", pathMatch: "full"
  //     },
  //     {
  //       path: "product", component: ProductListComponent
  //     },
  //     {
  //       path: "product/:id/edit", component: ProductEditComponent
  //     },
  //     {
  //       path: "product/add", component: ProductAddComponent
  //     }
  //   ]
  // },
  { path: 'admin', component: AdminPageComponent},
  { path: 'admin/product', component: ProductListComponent},
  { path: 'admin/add', component: ProductAddComponent},
  { path: 'admin/product/edit/:id', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
