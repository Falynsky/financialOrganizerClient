import { Subject } from './subject';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  subjects: any = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getSubjets();
  }

  getSubjets() {
    this.api.getSubjets()
      .subscribe(data => {
        this.subjects = data;
      });
  }

}
