import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "src/app/core/guards/auth-guard.service";
import { DashboardComponent } from "./dashboard.component";
import { BookingComponent } from "./booking/booking.component";
import { OrderComponent } from "./order/order.component";
import { HomeComponent } from "../dashboard/home/home.component";
import { ProfilComponent } from "./profil/profil.component";
import { ImportComponent } from "./settings/import/import.component";
import { UsersManagementComponent } from "./settings/users-management/users-management.component";
import { NgxPermissionsGuard } from "ngx-permissions";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    data: {
      permissions: {
        redirectTo: "connexion",
      },
    },
    children: [
      {
        path: "home",
        component: HomeComponent,
        data: {
          reUse: true,
        },
      },
      {
        path: "reservations",
        component: BookingComponent,
      },
      {
        path: "commander/:id",
        component: OrderComponent,
      },
      {
        path: "profil",
        component: ProfilComponent,
      },
      {
        path: "settings/import",
        component: ImportComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ["administrator"],
            redirectTo: "dashboard",
          },
        },
      },
      {
        path: "settings/users",
        component: UsersManagementComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ["administrator"],
            redirectTo: "/dashboard",
          },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
