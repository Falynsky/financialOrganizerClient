import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from '../main-pages/home-page/home-page.component';
import {AboutPageComponent} from '../main-pages/about-page/about-page.component';
import {SignUpPageComponent} from '../main-pages/sign-up-page/sign-up-page.component';
import {SubjectsListComponent} from '../lists/subjects-list/subjects-list.component';
import {LoansListComponent} from '../lists/loans-list/loans-list.component';
import {LoanTypesListComponent} from '../lists/loan-types-list/loan-types-list.component';
import {BankAccountTypesListComponent} from '../lists/bank-account-types-list/bank-account-types-list.component';
import {BankAccountsListComponent} from '../lists/bank-accounts-list/bank-accounts-list.component';
import {AccountsListComponent} from '../lists/accounts-list/accounts-list.component';
import {AccountTypesListComponent} from '../lists/account-types-list/account-types-list.component';
import {LogInPageComponent} from '../main-pages/log-in-page/log-in-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},
  {path: 'log-in', component: LogInPageComponent},
  {path: 'subjects', component: SubjectsListComponent},
  {path: 'loans', component: LoansListComponent},
  {path: 'loan-types', component: LoanTypesListComponent},
  {path: 'bank-account-types', component: BankAccountTypesListComponent},
  {path: 'bank-accounts', component: BankAccountsListComponent},
  {path: 'accounts', component: AccountsListComponent},
  {path: 'account-types', component: AccountTypesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
