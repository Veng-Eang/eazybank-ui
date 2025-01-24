import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from "@angular/common/http";
import { XhrInterceptor } from "./interceptors/app.request.interceptor";
import { AuthActivateRouteGuard } from "./routeguards/auth.routeguard";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NoticesComponent } from "./components/notices/notices.component";
import { AccountComponent } from "./components/account/account.component";
import { BalanceComponent } from "./components/balance/balance.component";
import { CardsComponent } from "./components/cards/cards.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { LoansComponent } from "./components/loans/loans.component";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ContactComponent,
    NoticesComponent,
    AccountComponent,
    BalanceComponent,
    CardsComponent,
    DashboardComponent,
    LogoutComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : XhrInterceptor,
      multi : true
    },
    AuthActivateRouteGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
