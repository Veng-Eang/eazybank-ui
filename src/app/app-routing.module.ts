import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ContactComponent } from "./components/contact/contact.component";
import { NoticesComponent } from "./components/notices/notices.component";
import { AccountComponent } from "./components/account/account.component";
import { BalanceComponent } from "./components/balance/balance.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { CardsComponent } from "./components/cards/cards.component";
import { LoansComponent } from "./components/loans/loans.component";
const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent}, 
  {path:'contact',component:ContactComponent},
  {path:'notices',component: NoticesComponent},
  {path: 'account',component: AccountComponent},
  {path: 'balance',component: BalanceComponent},
  { path: 'dashboard', component: DashboardComponent},
  {path: 'logout',component: LogoutComponent},
  {path: 'loans',component: LoansComponent},
  {path: 'cards',component: CardsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
