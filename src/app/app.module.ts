import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { NzModalModule, NzButtonModule, NzNotificationModule, NzIconModule } from "ng-zorro-antd";
import { fr_FR } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";

import localeFr from '@angular/common/locales/fr';
import { HttpTokenInterceptor } from './core/interceptors/http.token.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RouteReuseStrategy } from '@angular/router';
import { CacheReuseStrategy } from './core/strategies/CacheReuseStrategy.strategy';
registerLocaleData(localeFr);

@NgModule({
  
  declarations: [AppComponent,HeaderComponent, FooterComponent], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzModalModule,
    NzNotificationModule,
    NzIconModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true},
    {provide : RouteReuseStrategy, useClass : CacheReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
