import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTypesListComponent } from './loan-types-list.component';

describe('LoanTypesListComponent', () => {
  let component: LoanTypesListComponent;
  let fixture: ComponentFixture<LoanTypesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanTypesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
