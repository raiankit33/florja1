import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForgetComponent } from './user-forget.component';

describe('UserForgetComponent', () => {
  let component: UserForgetComponent;
  let fixture: ComponentFixture<UserForgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserForgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
