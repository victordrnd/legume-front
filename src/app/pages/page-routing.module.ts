import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { InformationsComponent } from './informations/informations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

const routes : Routes = [
  {
    path : '',
    children : [
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'products',
        component : ProductsComponent,
        data : {
          reUse : true
        }
      },
      {
        path : 'informations',
        component : InformationsComponent
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "connexion",
        component: LoginComponent,
      },
      {
        path : "inscription",
        component : RegisterComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
