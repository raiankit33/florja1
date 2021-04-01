import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorRequestComponent } from './sensor-request.component';

describe('SensorRequestComponent', () => {
  let component: SensorRequestComponent;
  let fixture: ComponentFixture<SensorRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
