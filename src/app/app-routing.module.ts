import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./UserManagement/login/login.component";
import {HomeComponent} from "./home/home.component";
import {TransactionsComponent} from "./transactions/transactions.component";
import {TransfererComponent} from "./transferer/transferer.component";
import {AliasComponent} from "./alias/alias.component";

const routes: Routes = [
  { path: '',
    pathMatch:"full",
    redirectTo: 'login'
  },
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
    path: 'alias',
    component: AliasComponent
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
