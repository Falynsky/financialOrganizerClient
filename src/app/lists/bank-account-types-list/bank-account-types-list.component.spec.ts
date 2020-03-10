import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountTypesListComponent } from './bank-account-types-list.component';

describe('BankAccountTypesListComponent', () => {
  let component: BankAccountTypesListComponent;
  let fixture: ComponentFixture<BankAccountTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
