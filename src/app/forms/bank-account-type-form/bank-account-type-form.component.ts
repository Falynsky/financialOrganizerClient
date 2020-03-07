import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';
import {BankAccountTypes} from '../../models/bankAccountTypes';

@Component({
  selector: 'app-bank-account-type-form',
  templateUrl: './bank-account-type-form.component.html',
  styleUrls: ['./bank-account-type-form.component.scss']
})
export class BankAccountTypeFormComponent implements OnInit {

  bankAccountTypeObs: Observable<BankAccountTypes>;
  bankAccountType = new BankAccountTypes();
  isNew = false;
  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.router.url !== '/bank-account-types/new') {
      this.setBankAccountTypeObs();
      this.setBankAccountType();
    } else {
      this.isNew = true;
    }
  }

  private setBankAccountTypeObs() {
    this.bankAccountTypeObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getBankAccountType(params.get('id')))
    );
  }

  private setBankAccountType() {
    this.bankAccountTypeObs.subscribe(obj => {
      this.bankAccountType = obj;
    });
  }

  onSubmit(obj) {
    this.api.updateBankAccountType(obj).subscribe();
    this.snackBar.open('Bank Account Type updated successful', 'OK', {
      duration: 2000,
    });
  }

  add(obj) {
    console.log(obj)
    this.api.createBankAccountType(obj).subscribe();
    this.snackBar.open('Bank Account Type added successfuly', 'OK', {
      duration: 2000,
    });
  }
}
