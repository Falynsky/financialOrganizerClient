import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../../service/hardcoded-authentication.service';

@Component({
  selector: 'app-after-login-navbar',
  templateUrl: './after-login-navbar.component.html',
  styleUrls: ['./after-login-navbar.component.scss']
})
export class AfterLoginNavbarComponent implements OnInit {

  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  logOut() {
    this.hardcodedAuthenticationService.logOut();
    this.router.navigate(['home']).then(() => window.location.reload());
  }
}
