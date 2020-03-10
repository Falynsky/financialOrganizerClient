import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../api/api.service';

@Component({
  selector: 'app-my-bank-accounts-list',
  templateUrl: './my-bank-accounts-list.component.html',
  styleUrls: ['./my-bank-accounts-list.component.scss']
})
export class MyBankAccountsListComponent implements OnInit {


  displayedColumns: string[] = [
    'bankAccountId',
    'name',
    'accountBalance',
    'bankAccountTypesByBankAccountTypeId'
  ];

  dataSource;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private api: ApiService) { }


  ngOnInit() {
    const user = sessionStorage.getItem('authenticatedUser');
    this.api.getMyBankAccounts(user).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}
