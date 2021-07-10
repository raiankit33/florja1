import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaForgetComponent } from './academia-forget.component';

describe('AcademiaForgetComponent', () => {
  let component: AcademiaForgetComponent;
  let fixture: ComponentFixture<AcademiaForgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademiaForgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiaForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
