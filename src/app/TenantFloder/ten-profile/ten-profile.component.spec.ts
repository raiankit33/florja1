import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenProfileComponent } from './ten-profile.component';

describe('TenProfileComponent', () => {
  let component: TenProfileComponent;
  let fixture: ComponentFixture<TenProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
