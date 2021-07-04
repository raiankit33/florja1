import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSentypeComponent } from './admin-sentype.component';

describe('AdminSentypeComponent', () => {
  let component: AdminSentypeComponent;
  let fixture: ComponentFixture<AdminSentypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSentypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSentypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
