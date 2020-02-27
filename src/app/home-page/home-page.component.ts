import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  smartphone: any = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getSmartphones();
  }

  getSmartphones() {
    this.api.getSmartphone()
      .subscribe(data => {
        for (const d of (data as any)) {
          this.smartphone.push({
            subjectId: d.subjectId,
            forename: d.forename,
            surename: d.surename,
            email: d.email
          });
        }
        console.log(this.smartphone);
      });
  }

}
