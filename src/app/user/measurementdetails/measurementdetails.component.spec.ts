import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementdetailsComponent } from './measurementdetails.component';

describe('MeasurementdetailsComponent', () => {
  let component: MeasurementdetailsComponent;
  let fixture: ComponentFixture<MeasurementdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
