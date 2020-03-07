import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {MatSnackBar} from '@angular/material';
import {switchMap} from 'rxjs/operators';
import {LoanTypes} from '../../models/loanTypes';

@Component({
  selector: 'app-loan-type-form',
  templateUrl: './loan-type-form.component.html',
  styleUrls: ['./loan-type-form.component.scss']
})
export class LoanTypeFormComponent implements OnInit {

  loanTypeObs: Observable<LoanTypes>;
  loanType = new LoanTypes();

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.setLoanTypeObj();
    this.setLoanType();
  }

  private setLoanTypeObj() {
    this.loanTypeObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getLoanType(params.get('id')))
    );
  }

  private setLoanType() {
    this.loanTypeObs.subscribe(loanType => {
      this.loanType = loanType;
    });
  }

  onSubmit(obj) {
    this.api.updateLoanType(obj).subscribe();
    this.snackBar.open('Loan Type updated successful', 'OK', {
      duration: 2000,
    });
  }

}
