import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademialoginComponent } from './academialogin.component';

describe('AcademialoginComponent', () => {
  let component: AcademialoginComponent;
  let fixture: ComponentFixture<AcademialoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademialoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademialoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
