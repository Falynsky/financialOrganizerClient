import {Component, OnInit} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {MatSnackBar} from '@angular/material';
import {catchError, switchMap} from 'rxjs/operators';
import {BankAccountTypes} from '../../models/bankAccountTypes';

@Component({
  selector: 'app-bank-account-type-form',
  templateUrl: './bank-account-type-form.component.html',
  styleUrls: ['./bank-account-type-form.component.scss']
})
export class BankAccountTypeFormComponent implements OnInit {

  bankAccountTypeObs: Observable<BankAccountTypes>;
  bankAccountType = new BankAccountTypes();

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setBankAccountTypeObs();
    this.setBankAccountType();
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


  }


}
