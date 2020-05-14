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
import { NgZorroAntdModule, NzSelectModule, NzButtonModule, NzTagModule, NzTableModule, NzTimelineModule, NzFormModule, NzInputModule, NzIconModule, NzSpinModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageRoutingModule } from './page-routing.module';
import { ContactComponent } from './contact/contact.component';
import { PaniersComponent } from './home/paniers/paniers.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent,HeroComponent, AboutComponent, DriveComponent, ProductsComponent, PanierModalComponent, InformationsComponent,  ProductsTableComponent, ContactComponent, PaniersComponent ],
  imports: [
    CommonModule,
    PageRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTagModule,
    NzTableModule,
    NzSelectModule,
    NzTimelineModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzSpinModule
  ],
  entryComponents : [
    PanierModalComponent
  ],
  exports : [
    ProductsTableComponent,NzSelectModule
  ],
})
export class PageModule { }
