import { Subjects } from '../models/subjects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getSubjects(): Observable<Subjects[]> {
    return this.http.get<Subjects[]>(api + 'subjects/all');
  }
}
