import { Subjects } from '../models/subjects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {BankAccounts} from '../models/bankAccounts';
import {Loans} from '../models/loans';

const api = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
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

  getBankAccounts(): Observable<BankAccounts[]> {
    return this.http.get<BankAccounts[]>(api + 'bankAccounts/all');
  }

  getLoans(): Observable<Loans[]> {
    return this.http.get<Loans[]>(api + 'loans/all');
  }
}
