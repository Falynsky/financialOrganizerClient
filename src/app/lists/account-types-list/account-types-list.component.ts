import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-account-types-list',
  templateUrl: './account-types-list.component.html',
  styleUrls: ['./account-types-list.component.scss']
})
export class AccountTypesListComponent implements OnInit {

  displayedColumns: string[] = [
    'accountTypeId',
    'name',
    'permissionLevel',
    'button'
  ];

  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getAccountTypes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}

