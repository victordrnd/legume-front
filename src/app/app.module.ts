import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { fr_FR } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import fr from "@angular/common/locales/fr";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingsTableComponent } from './pages/bookings-table/bookings-table.component';
import { CreateBookingModalComponent } from './pages/create-booking-modal/create-booking-modal.component';

registerLocaleData(fr);

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, LoginComponent, RegisterComponent, BookingComponent, BookingsTableComponent, CreateBookingModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
