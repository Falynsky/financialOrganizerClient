import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  ];
  LineChart = [];
  BarChart = [];
  PieChart = [];
  panelOpenState = false;


  constructor() {
  }

  ngOnInit() {
    this.pieChart();
  }

  private pieChart() {
// pie chart:
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Nothing', 'Textbook', 'Excel file', 'Desktop app', 'Mobile app'],
        datasets: [{
          label: '# of Votes',
          data: [5431, 1233, 4566, 800, 104],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: 'Ways of financial organization using by people',
          display: true
        }
      }
    });
  }

}
