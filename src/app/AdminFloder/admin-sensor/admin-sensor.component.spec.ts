import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSensorComponent } from './admin-sensor.component';

describe('AdminSensorComponent', () => {
  let component: AdminSensorComponent;
  let fixture: ComponentFixture<AdminSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
