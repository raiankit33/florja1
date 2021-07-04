import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadDashoadComponent } from './acad-dashoad.component';

describe('AcadDashoadComponent', () => {
  let component: AcadDashoadComponent;
  let fixture: ComponentFixture<AcadDashoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadDashoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadDashoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
