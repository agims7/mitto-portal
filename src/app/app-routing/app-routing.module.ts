//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RemindPasswordComponent } from '../remind-password/remind-password.component';
import { PortalComponent } from '../portal/portal.component';
import { SettingsComponent } from '../settings/settings.component';
import { PasswordChangeComponent } from '../password-change/password-change.component';
import { TypeAndAddressComponent } from '../type-and-address/type-and-address.component';
import { CarrierComponent } from '../carrier/carrier.component';
import { ParcelSummaryComponent } from '../parcel-summary/parcel-summary.component';
import { OrderAcceptedComponent } from '../order-accepted/order-accepted.component';
import { OrderToCartComponent } from '../order-to-cart/order-to-cart.component';
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../orders/orders.component';
import { OrderComponent } from '../order/order.component';

//Guards
import { AuthGuard } from '../guards/auth.guard';
import { CarrierViewGuard } from '../guards/carrier-view.guard';
import { SummaryViewGuard } from '../guards/summary-view.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'remind', component: RemindPasswordComponent },
    // { path: 'portal', component: PortalComponent , canActivate: [AuthGuard], children: [
    { path: 'portal', component: PortalComponent, children: [
        { path: '', redirectTo: 'orders', pathMatch: 'full' },
        { path: 'settings', component: SettingsComponent },
        { path: 'password', component: PasswordChangeComponent },
        { path: 'package-details', component: TypeAndAddressComponent },
        { path: 'carrier', component: CarrierComponent, canActivate: [CarrierViewGuard] },
        { path: 'parcel-summary', component: ParcelSummaryComponent, canActivate: [SummaryViewGuard] },
        { path: 'order-accepted', component: OrderAcceptedComponent },
        { path: 'order-to-cart', component: OrderToCartComponent },
        { path: 'cart', component: CartComponent },
        { path: 'orders', component: OrdersComponent },
        { path: 'order/:id', component: OrderComponent },
      ] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
