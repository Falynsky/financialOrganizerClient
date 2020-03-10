import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoansListComponent } from './my-loans-list.component';

describe('MyLoansListComponent', () => {
  let component: MyLoansListComponent;
  let fixture: ComponentFixture<MyLoansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLoansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLoansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
