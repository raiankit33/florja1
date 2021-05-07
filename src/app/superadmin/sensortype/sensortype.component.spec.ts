import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensortypeComponent } from './sensortype.component';

describe('SensortypeComponent', () => {
  let component: SensortypeComponent;
  let fixture: ComponentFixture<SensortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
