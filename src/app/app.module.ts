import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { SideBarComponent } from './Shared/side-bar/side-bar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { LoginComponent } from './UserManagement/login/login.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransfererComponent } from './transferer/transferer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    TransactionsComponent,
    TransfererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
