import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Subjects} from '../../models/subjects';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ApiService} from '../../api/api.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  subjectObs: Observable<Subjects>;
  subject = new Subjects();
  isNew = false;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.router.url !== '/subjects/new') {
      this.setSubjectObs();
      this.setCountry();
    } else {
      this.isNew = true;
    }

  }

  private setSubjectObs() {
    this.subjectObs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getSubject(params.get('id')))
    );
  }

  private setCountry() {
    this.subjectObs.subscribe(subject => {
      this.subject = subject;
    });
  }

  onSubmit(obj) {
    this.api.updateSubject(obj).subscribe();
    this.snackBar.open('Subject updated successful', 'OK', {
      duration: 2000,
    });
  }

  add(obj) {

  }
}
