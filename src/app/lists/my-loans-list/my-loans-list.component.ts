import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-my-loans-list',
  templateUrl: './my-loans-list.component.html',
  styleUrls: ['./my-loans-list.component.scss']
})
export class MyLoansListComponent implements OnInit {
  displayedColumns: string[] = [
    'loanId',
    'name',
    'value',
    'loanTypeId'
  ];

  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLoans().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
  }
}
