import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './api/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbars/mian-navbar/navbar.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  _MatMenuDirectivesModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';
import { AboutPageComponent } from './main-pages/about-page/about-page.component';
import { SignUpPageComponent } from './main-pages/sign-up-page/sign-up-page.component';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { SubjectsListComponent } from './lists/subjects-list/subjects-list.component';
import { AccountsListComponent } from './lists/accounts-list/accounts-list.component';
import { AccountTypesListComponent } from './lists/account-types-list/account-types-list.component';
import { BankAccountsListComponent } from './lists/bank-accounts-list/bank-accounts-list.component';
import { BankAccountTypesListComponent } from './lists/bank-account-types-list/bank-account-types-list.component';
import { LoansListComponent } from './lists/loans-list/loans-list.component';
import { LoanTypesListComponent } from './lists/loan-types-list/loan-types-list.component';
import { AfterLoginNavbarComponent } from './navbars/after-login-navbar/after-login-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutPageComponent,
    SignUpPageComponent,
    HomePageComponent,
    SubjectsListComponent,
    AccountsListComponent,
    AccountTypesListComponent,
    BankAccountsListComponent,
    BankAccountTypesListComponent,
    LoansListComponent,
    LoanTypesListComponent,
    AfterLoginNavbarComponent
  ],
  imports: [
    FormsModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
