import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bank-account-types-list',
  templateUrl: './bank-account-types-list.component.html',
  styleUrls: ['./bank-account-types-list.component.scss']
})
export class BankAccountTypesListComponent implements OnInit {

  displayedColumns: string[] = [
    'bankAccountTypeId',
    'name',
    'button'
  ];

  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.api.getBankAccountTypes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  createNewObj() {
    this.router.navigateByUrl('bank-account-types/new');
  }
}
