import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';
import {Loans} from '../../models/loans';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})
export class LoanFormComponent implements OnInit {

  loanObs: Observable<Loans>;
  loan = new Loans();

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setLoanObs();
    this.setLoan();
  }

  private setLoanObs() {
    this.loanObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getLoan(params.get('id')))
    );
  }

  private setLoan() {
    this.loanObs.subscribe(obj => {
      this.loan = obj;
    });
  }

  onSubmit(obj) {
    this.api.updateLoan(obj).subscribe();
    this.snackBar.open('Loan updated successful', 'OK', {
      duration: 2000,
    });
  }

}
