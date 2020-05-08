import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { fr_FR } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingsTableComponent } from './pages/booking/bookings-table/bookings-table.component';
import { CreateBookingModalComponent } from './pages/booking/create-booking-modal/create-booking-modal.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { AboutComponent } from './pages/home/about/about.component';
import { DriveComponent } from './pages/home/drive/drive.component';
import { ProductsComponent } from './pages/products/products.component';
import localeFr from '@angular/common/locales/fr';
import { PanierModalComponent } from './pages/products/panier-modal/panier-modal.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  
  declarations: [AppComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, HomeComponent,HeroComponent, AboutComponent, DriveComponent, BookingComponent, BookingsTableComponent, CreateBookingModalComponent, ProductsComponent, PanierModalComponent, InformationsComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents : [
    PanierModalComponent
  ]
})
export class AppModule {}
