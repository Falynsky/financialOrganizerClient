import {Subjects} from '../models/subjects';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BankAccounts} from '../models/bankAccounts';
import {Loans} from '../models/loans';
import {LoanTypes} from '../models/loanTypes';
import {BankAccountTypes} from '../models/bankAccountTypes';
import {Accounts} from '../models/accounts';
import {AccountTypes} from '../models/accountTypes';

const api = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getAccountTypes(): Observable<AccountTypes[]> {
    return this.http.get<AccountTypes[]>(api + 'accountTypes/');
  }

  getAccountType(id: string): Observable<AccountTypes> {
    return this.http.get<AccountTypes>(api + 'accountTypes/' + id);
  }

  updateAccountType(data: AccountTypes): Observable<AccountTypes> {
    return this.http.post<AccountTypes>(api + 'accountTypes/', data);
  }

  getAccounts(): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(api + 'accounts/');
  }

  getAccount(id: string): Observable<Accounts> {
    return this.http.get<Accounts>(api + 'accounts/' + id);
  }

  updateAccount(data: Accounts): Observable<Accounts> {
    return this.http.post<Accounts>(api + 'accounts/update', data);
  }

  getBankAccountTypes(): Observable<BankAccountTypes[]> {
    return this.http.get<BankAccountTypes[]>(api + 'loanTypes/');
  }

  getBankAccountType(id: string): Observable<BankAccountTypes> {
    return this.http.get<BankAccountTypes>(api + 'bankAccountTypes/' + id);
  }

  updateBankAccountType(data: BankAccountTypes): Observable<BankAccountTypes> {
    return this.http.post<BankAccountTypes>(api + 'bankAccountsTypes/update', data);
  }

  getBankAccounts(): Observable<BankAccounts[]> {
    return this.http.get<BankAccounts[]>(api + 'bankAccounts/all');
  }

  getBankAccount(id: string): Observable<BankAccounts> {
    return this.http.get<BankAccounts>(api + 'bankAccounts/' + id);
  }

  updateBankAccount(data: BankAccounts): Observable<BankAccounts> {
    return this.http.post<BankAccounts>(api + 'bankAccounts/update', data);
  }

  getLoanTypes(): Observable<LoanTypes[]> {
    return this.http.get<LoanTypes[]>(api + 'loanTypes');
  }

  getLoanType(id: string): Observable<LoanTypes> {
    return this.http.get<LoanTypes>(api + 'loanTypes/' + id);
  }

  updateLoanType(data: LoanTypes): Observable<LoanTypes> {
    return this.http.post<LoanTypes>(api + 'loanTypes/update', data);
  }

  getLoans(): Observable<Loans[]> {
    return this.http.get<Loans[]>(api + 'loans/all');
  }

  getLoan(id: string): Observable<Loans> {
    return this.http.get<Loans>(api + 'loans/' + id);
  }

  updateLoan(data: Loans): Observable<Loans> {
    return this.http.post<Loans>(api + 'loans/update', data);
  }

  getSubjects(): Observable<Subjects[]> {
    return this.http.get<Subjects[]>(api + 'subjects/all');
  }

  getSubject(id: string): Observable<Subjects> {
    return this.http.get<Subjects>(api + 'subjects/' + id);
  }

  updateSubject(data: Subjects): Observable<Subjects> {
    return this.http.post<Subjects>(api + 'subjects/update', data);
  }

}
