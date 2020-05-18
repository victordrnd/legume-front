import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { OrderComponent } from "./order/order.component";
import { OrderSummaryComponent } from "./order/order-summary/order-summary.component";
import { BookingComponent } from "./booking/booking.component";
import { BookingsTableComponent } from "./booking/bookings-table/bookings-table.component";
import {
  NzSelectModule,
  NzTagModule,
  NzFormModule,
  NzModalModule,
  NzListModule,
  NzMenuModule,
  NzTableModule,
  NzButtonModule,
  NzIconModule,
  NzInputNumberModule,
  NzInputModule,
  NzSliderModule,
  NzGridModule,
  NzEmptyModule,
  NzToolTipModule,
  NzUploadModule,
  NzDatePickerModule,
  NzLayoutModule,
  NzCheckboxModule,
  NzDividerModule,
} from "ng-zorro-antd";
import { RouterModule, RouteReuseStrategy } from "@angular/router";
import { PageModule } from "../page.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./home/home.component";
import { QuantityModalComponent } from "./order/quantity-modal/quantity-modal.component";
import { ProfilComponent } from "./profil/profil.component";
import { NgxPermissionsModule } from "ngx-permissions";
import { ImportComponent } from "./settings/import/import.component";
import { UsersManagementComponent } from "./settings/users-management/users-management.component";
import { BookingModalComponent } from "./booking/booking-modal/booking-modal.component";
import { PaymentComponent } from './payment/payment.component';
import { OrderManagementComponent } from './settings/order-management/order-management.component';
import { UpdateUserComponent } from './profil/update-user/update-user.component';
import { PhonePipe } from 'src/app/core/pipes/phone.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    OrderComponent,
    OrderSummaryComponent,
    BookingComponent,
    OrderSummaryComponent,
    BookingsTableComponent,
    HomeComponent,
    QuantityModalComponent,
    ProfilComponent,
    ImportComponent,
    UsersManagementComponent,
    BookingModalComponent,
    PaymentComponent,
    OrderManagementComponent,
    UpdateUserComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PageModule,
    NzTagModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzSliderModule,
    NzGridModule,
    NzEmptyModule,
    NzDatePickerModule,
    NzUploadModule,
    NzLayoutModule,
    NzCheckboxModule,
    NzListModule,
    NzDividerModule,
    NgxPermissionsModule.forChild(),
  ],
  entryComponents : [UpdateUserComponent],
  providers : [CurrencyPipe],
  bootstrap: [DashboardComponent],
  exports: [QuantityModalComponent],
})
export class DashboardModule { }
