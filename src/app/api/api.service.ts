import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';


const localUrl = 'http://localhost:8080/subjects/all';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {
  }

  getSubjets() {
    return this.http.get(localUrl);
  }
}
