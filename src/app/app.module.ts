import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './api/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbars/main-navbar/navbar.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  _MatMenuDirectivesModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatSortModule,
  MatInputModule,
  MatSnackBarModule,
  MatGridListModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatSelectModule
} from '@angular/material';
import {AboutPageComponent} from './main-pages/about-page/about-page.component';
import {SignUpPageComponent} from './main-pages/sign-up-page/sign-up-page.component';
import {HomePageComponent} from './main-pages/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {SubjectsListComponent} from './lists/subjects-list/subjects-list.component';
import {AccountsListComponent} from './lists/accounts-list/accounts-list.component';
import {AccountTypesListComponent} from './lists/account-types-list/account-types-list.component';
import {BankAccountsListComponent} from './lists/bank-accounts-list/bank-accounts-list.component';
import {BankAccountTypesListComponent} from './lists/bank-account-types-list/bank-account-types-list.component';
import {LoansListComponent} from './lists/loans-list/loans-list.component';
import {LoanTypesListComponent} from './lists/loan-types-list/loan-types-list.component';
import {AfterLoginNavbarComponent} from './navbars/after-login-navbar/after-login-navbar.component';
import {LogInPageComponent} from './main-pages/log-in-page/log-in-page.component';
import {SubjectFormComponent} from './forms/subject-form/subject-form.component';
import {ErrorComponent} from './error/error/error.component';
import {LoanFormComponent} from './forms/loan-form/loan-form.component';
import {BankAccountFormComponent} from './forms/bank-account-form/bank-account-form.component';
import {AccountFormComponent} from './forms/account-form/account-form.component';
import {LoanTypeFormComponent} from './forms/loan-type-form/loan-type-form.component';
import {BankAccountTypeFormComponent} from './forms/bank-account-type-form/bank-account-type-form.component';
import {AccountTypeFormComponent} from './forms/account-type-form/account-type-form.component';
import { MenuComponent } from './main-pages/menu/menu.component';
import {MyBankAccountsListComponent} from './lists/my-bank-accounts-list/my-bank-accounts-list.component';
import { MyLoansListComponent } from './lists/my-loans-list/my-loans-list.component';
import { DepositComponent } from './transactions/deposit/deposit.component';
import { WithdrawComponent } from './transactions/withdraw/withdraw.component';
import { PayTheLoanComponent } from './transactions/pay-the-loan/pay-the-loan.component';
import { TransferComponent } from './transactions/transfer/transfer.component';

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
    AfterLoginNavbarComponent,
    LogInPageComponent,
    SubjectFormComponent,
    ErrorComponent,
    LoanFormComponent,
    BankAccountFormComponent,
    AccountFormComponent,
    LoanTypeFormComponent,
    BankAccountTypeFormComponent,
    AccountTypeFormComponent,
    MenuComponent,
    MyBankAccountsListComponent,
    MyLoansListComponent,
    DepositComponent,
    WithdrawComponent,
    PayTheLoanComponent,
    TransferComponent
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
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
