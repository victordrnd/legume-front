import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { InformationsComponent } from './pages/informations/informations.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'informations',
    component : InformationsComponent
  },
  {
    path: "connexion",
    component: LoginComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
