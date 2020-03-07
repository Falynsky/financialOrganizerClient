import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';
import {Accounts} from '../../models/accounts';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  accountObs: Observable<Accounts>;
  account = new Accounts();

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setAccountObs();
    this.setAccount();
  }

  private setAccountObs() {
    this.accountObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getAccount(params.get('id')))
    );
  }

  private setAccount() {
    this.accountObs.subscribe(obj => {
      this.account = obj;
    });
  }

  onSubmit(obj) {
    this.api.updateAccount(obj).subscribe();
    this.snackBar.open('Account updated successful', 'OK', {
      duration: 2000,
    });
  }
}
