import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BankAccounts} from '../../models/bankAccounts';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.scss']
})
export class BankAccountFormComponent implements OnInit {

  bankAccountObs: Observable<BankAccounts>;
  bankAccount = new BankAccounts();

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setBankAccountObs();
    this.setBankAccount();
  }

  private setBankAccountObs() {
    this.bankAccountObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getBankAccount(params.get('id')))
    );
  }

  private setBankAccount() {
    this.bankAccountObs.subscribe(obj => {
      this.bankAccount = obj;
    });
  }

  onSubmit(obj) {
    this.api.updateBankAccount(obj).subscribe();
    this.snackBar.open('Bank Account updated successful', 'OK', {
      duration: 2000,
    });
  }

}
