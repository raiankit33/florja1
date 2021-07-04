import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDashComponent } from './ten-dash.component';

describe('TenDashComponent', () => {
  let component: TenDashComponent;
  let fixture: ComponentFixture<TenDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
