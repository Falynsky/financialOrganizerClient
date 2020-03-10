import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountTypeFormComponent } from './bank-account-type-form.component';

describe('BankAccountTypeFormComponent', () => {
  let component: BankAccountTypeFormComponent;
  let fixture: ComponentFixture<BankAccountTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAccountTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
