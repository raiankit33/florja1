import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSocialComponent } from './admin-social.component';

describe('AdminSocialComponent', () => {
  let component: AdminSocialComponent;
  let fixture: ComponentFixture<AdminSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
