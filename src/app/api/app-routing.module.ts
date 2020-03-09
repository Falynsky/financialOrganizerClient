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
import {RouteGuardService} from '../service/route-guard.service';
import {MyBankAccountsListComponent} from '../lists/my-bank-accounts-list/my-bank-accounts-list.component';
import {MyLoansListComponent} from '../lists/my-loans-list/my-loans-list.component';
import {DepositComponent} from '../transactions/deposit/deposit.component';
import {WithdrawComponent} from '../transactions/withdraw/withdraw.component';
import {TransferComponent} from '../transactions/transfer/transfer.component';
import {PayTheLoanComponent} from '../transactions/pay-the-loan/pay-the-loan.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},
  {path: 'log-in', component: LogInPageComponent},
  // lists components
  {path: 'account-types', component: AccountTypesListComponent, canActivate: [RouteGuardService]},
  {path: 'accounts', component: AccountsListComponent, canActivate: [RouteGuardService]},
  {path: 'bank-account-types', component: BankAccountTypesListComponent, canActivate: [RouteGuardService]},
  {path: 'bank-accounts', component: BankAccountsListComponent, canActivate: [RouteGuardService]},
  {path: 'loan-types', component: LoanTypesListComponent, canActivate: [RouteGuardService]},
  {path: 'loans', component: LoansListComponent, canActivate: [RouteGuardService]},
  {path: 'subjects', component: SubjectsListComponent, canActivate: [RouteGuardService]},
  // mine lists components
  {path: 'bank-accounts/my', component: MyBankAccountsListComponent, canActivate: [RouteGuardService]},
  {path: 'loans/my', component: MyLoansListComponent, canActivate: [RouteGuardService]},
  // transactions
  {path: 'deposit', component: DepositComponent, canActivate: [RouteGuardService]},
  {path: 'withdraw', component: WithdrawComponent, canActivate: [RouteGuardService]},
  {path: 'transfer', component: TransferComponent, canActivate: [RouteGuardService]},
  {path: 'pay-the-loan', component: PayTheLoanComponent, canActivate: [RouteGuardService]},
  // forms components
  {path: 'accounts/:id', component: AccountFormComponent, canActivate: [RouteGuardService]},
  {path: 'account-types/:id', component: AccountTypeFormComponent, canActivate: [RouteGuardService]},
  {path: 'bank-accounts/:id', component: BankAccountFormComponent, canActivate: [RouteGuardService]},
  {path: 'bank-account-types/:id', component: BankAccountTypeFormComponent, canActivate: [RouteGuardService]},
  {path: 'loans/:id', component: LoanFormComponent, canActivate: [RouteGuardService]},
  {path: 'loan-types/:id', component: LoanTypeFormComponent, canActivate: [RouteGuardService]},
  {path: 'subjects/:id', component: SubjectFormComponent, canActivate: [RouteGuardService]},
  // not found
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
