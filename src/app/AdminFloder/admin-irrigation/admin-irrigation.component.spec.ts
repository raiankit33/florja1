import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIrrigationComponent } from './admin-irrigation.component';

describe('AdminIrrigationComponent', () => {
  let component: AdminIrrigationComponent;
  let fixture: ComponentFixture<AdminIrrigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminIrrigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIrrigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
