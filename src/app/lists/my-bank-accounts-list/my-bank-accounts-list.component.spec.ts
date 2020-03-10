import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBank0accountsListComponent } from './my-bank-accounts-list.component';

describe('MyBank0accountsListComponent', () => {
  let component: MyBank0accountsListComponent;
  let fixture: ComponentFixture<MyBank0accountsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBank0accountsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBank0accountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
