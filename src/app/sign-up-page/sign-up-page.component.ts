import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  accounts: any = [];
  login: string;
  password: string;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.api.getAccounts()
      .subscribe(data => {
        this.accounts = data;
      });
  }

  loginValidation() {
    this.accounts.forEach(account => {
      if (account.login === this.login && account.password === this.password) {
        console.log('ZALOGOWANO');
        this.router.navigateByUrl('/home');
      }
    });

  }

}
