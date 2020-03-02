import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';


const localUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {
  }

  getSubjets() {
    return this.http.get(localUrl + 'subjects/all');
  }

  getAccounts() {
    return this.http.get(localUrl + 'accounts/all');
  }
}
