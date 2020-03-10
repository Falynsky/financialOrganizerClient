import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  login: string;
  password: string;
  private invalidLogin: boolean;
  errorMessage = 'Wrong credentials!';
  hide = true;
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  loginValidation() {

    if (this.hardcodedAuthenticationService.authenticate(this.login, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['home']).then(() => window.location.reload());
    } else {
      this.invalidLogin = true;
    }
  }
}
