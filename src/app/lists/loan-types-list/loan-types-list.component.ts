import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-loan-types-list',
  templateUrl: './loan-types-list.component.html',
  styleUrls: ['./loan-types-list.component.scss']
})
export class LoanTypesListComponent implements OnInit {

  displayedColumns: string[] = [
    'loanTypeId',
    'name',
    'button'
  ];

  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getLoanTypes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
