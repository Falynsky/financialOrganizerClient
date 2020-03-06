import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';
import {AccountTypes} from '../../models/accountTypes';

@Component({
  selector: 'app-account-type-form',
  templateUrl: './account-type-form.component.html',
  styleUrls: ['./account-type-form.component.scss']
})
export class AccountTypeFormComponent implements OnInit {

  accountTypeObs: Observable<AccountTypes>;
  accountType = new AccountTypes();

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setAccountTypeObs();
    this.setAccountType();
  }

  private setAccountTypeObs() {
    this.accountTypeObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getAccountType(params.get('id')))
    );
  }

  private setAccountType() {
    this.accountTypeObs.subscribe(obj => {
      this.accountType = obj;
    });
  }

  onSubmit(obj) {
    this.api.updateAccountType(obj).subscribe();
    this.snackBar.open('Account Type updated successful', 'OK', {
      duration: 2000,
    });
  }
}
