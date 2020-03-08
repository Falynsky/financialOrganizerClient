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
import {SubjectFormComponent} from '../forms/subject-form/subject-form.component';
import {ErrorComponent} from '../error/error/error.component';
import {AccountFormComponent} from '../forms/account-form/account-form.component';
import {AccountTypeFormComponent} from '../forms/account-type-form/account-type-form.component';
import {BankAccountFormComponent} from '../forms/bank-account-form/bank-account-form.component';
import {BankAccountTypeFormComponent} from '../forms/bank-account-type-form/bank-account-type-form.component';
import {LoanFormComponent} from '../forms/loan-form/loan-form.component';
import {LoanTypeFormComponent} from '../forms/loan-type-form/loan-type-form.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},
  {path: 'log-in', component: LogInPageComponent},
  // lists components
  {path: 'account-types', component: AccountTypesListComponent},
  {path: 'accounts', component: AccountsListComponent},
  {path: 'bank-account-types', component: BankAccountTypesListComponent},
  {path: 'bank-accounts', component: BankAccountsListComponent},
  {path: 'loan-types', component: LoanTypesListComponent},
  {path: 'loans', component: LoansListComponent},
  {path: 'subjects', component: SubjectsListComponent},
  // forms components
  {path: 'accounts/:id', component: AccountFormComponent},
  {path: 'account-types/:id', component: AccountTypeFormComponent},
  {path: 'bank-accounts/:id', component: BankAccountFormComponent},
  {path: 'bank-account-types/:id', component: BankAccountTypeFormComponent},
  {path: 'loans/:id', component: LoanFormComponent},
  {path: 'loan-types/:id', component: LoanTypeFormComponent},
  {path: 'subjects/:id', component: SubjectFormComponent},
  // not found
  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
