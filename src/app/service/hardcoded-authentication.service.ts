import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(login, password) {
    if (login === 'kfa' && password === 'kfa') {
      sessionStorage.setItem('authenticatedUser', login);
      return true;
    } else {
      return false;
    }
  }

  public isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user == null);
  }

}
