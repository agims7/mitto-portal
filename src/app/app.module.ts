//Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RemindPasswordComponent } from './remind-password/remind-password.component';
import { PortalComponent } from './portal/portal.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuComponent } from './menu/menu.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { TypeAndAddressComponent } from './type-and-address/type-and-address.component';
import { LoaderComponent } from './loader/loader.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ParcelSummaryComponent } from './parcel-summary/parcel-summary.component';
import { OrderAcceptedComponent } from './order-accepted/order-accepted.component';

//Services
import { AppService } from './services/app.service';
import { LoginService } from './services/login.service';
import { ParcelService } from './services/parcel.service';
import { CarriersService } from './services/carriers.service';
import { OrderService } from './services/order.service';

//Guards
import { AuthGuard } from './guards/auth.guard';
import { CarrierViewGuard } from './guards/carrier-view.guard';
import { SummaryViewGuard } from './guards/summary-view.guard';
import { CartComponent } from './cart/cart.component';
import { OrderToCartComponent } from './order-to-cart/order-to-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RemindPasswordComponent,
    PortalComponent,
    SettingsComponent,
    MenuComponent,
    PasswordChangeComponent,
    TypeAndAddressComponent,
    LoaderComponent,
    CarrierComponent,
    ParcelSummaryComponent,
    OrderAcceptedComponent,
    CartComponent,
    OrderToCartComponent,
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppService,
    LoginService,
    ParcelService,
    CarriersService,
    OrderService,
    AuthGuard,
    CarrierViewGuard,
    SummaryViewGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
