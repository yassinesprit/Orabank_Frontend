import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./UserManagement/login/login.component";
import {HomeComponent} from "./home/home.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {TransfererComponent} from "./transferer/transferer.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
  ,
  {
    path: 'transactions',
    component: TransactionsComponent
  }
  ,
  {
    path: 'transferer',
    component: TransfererComponent
  }
  ,
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
