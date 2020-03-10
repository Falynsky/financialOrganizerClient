import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTheLoanComponent } from './pay-the-loan.component';

describe('PayTheLoanComponent', () => {
  let component: PayTheLoanComponent;
  let fixture: ComponentFixture<PayTheLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayTheLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayTheLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
