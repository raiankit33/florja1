import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenNotificationComponent } from './ten-notification.component';

describe('TenNotificationComponent', () => {
  let component: TenNotificationComponent;
  let fixture: ComponentFixture<TenNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
