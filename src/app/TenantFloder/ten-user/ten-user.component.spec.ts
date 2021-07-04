import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenUserComponent } from './ten-user.component';

describe('TenUserComponent', () => {
  let component: TenUserComponent;
  let fixture: ComponentFixture<TenUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
