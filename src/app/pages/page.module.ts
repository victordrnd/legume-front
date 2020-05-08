import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { AboutComponent } from './home/about/about.component';
import { DriveComponent } from './home/drive/drive.component';
import { ProductsComponent } from './products/products.component';
import { PanierModalComponent } from './products/panier-modal/panier-modal.component';
import { InformationsComponent } from './informations/informations.component';
import { ProductsTableComponent } from './products/products-table/products-table.component';
import { NgZorroAntdModule, NzSelectModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageRoutingModule } from './page-routing.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent,HeroComponent, AboutComponent, DriveComponent, ProductsComponent, PanierModalComponent, InformationsComponent,  ProductsTableComponent ],
  imports: [
    CommonModule,
    PageRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  entryComponents : [
    PanierModalComponent
  ],
  exports : [
    ProductsTableComponent,RouterModule, NgZorroAntdModule
  ],
})
export class PageModule { }
