import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNotificationComponent } from './sub-notification.component';

describe('SubNotificationComponent', () => {
  let component: SubNotificationComponent;
  let fixture: ComponentFixture<SubNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
