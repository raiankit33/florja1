import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcademiaComponent } from './admin-academia.component';

describe('AdminAcademiaComponent', () => {
  let component: AdminAcademiaComponent;
  let fixture: ComponentFixture<AdminAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
