import { Routes, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api/api.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  displayedColumns: string[] = [
    'subjectId',
    'forename',
    'surename',
    'email'
  ];

  login: string;
  password: string;
  datasource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getSubjects().subscribe(data => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.sort = this.sort;
      this.datasource.paginator = this.paginator;
      console.log(data);
    });
  }



  // loginValidation() {
  //   this.accounts.forEach(account => {
  //     console.log(account.password === this.password);
  //     if (account.login === this.login && account.password === this.password) {
  //       console.log('ZALOGOWANO');
  //       this.router.navigateByUrl('/home');
  //     }
  //   });

  // }

}
