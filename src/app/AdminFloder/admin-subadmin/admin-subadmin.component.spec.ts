import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubadminComponent } from './admin-subadmin.component';

describe('AdminSubadminComponent', () => {
  let component: AdminSubadminComponent;
  let fixture: ComponentFixture<AdminSubadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
