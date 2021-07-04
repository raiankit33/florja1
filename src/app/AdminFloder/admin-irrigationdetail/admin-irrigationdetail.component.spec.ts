import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIrrigationdetailComponent } from './admin-irrigationdetail.component';

describe('AdminIrrigationdetailComponent', () => {
  let component: AdminIrrigationdetailComponent;
  let fixture: ComponentFixture<AdminIrrigationdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIrrigationdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIrrigationdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
