import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenSocialComponent } from './ten-social.component';

describe('TenSocialComponent', () => {
  let component: TenSocialComponent;
  let fixture: ComponentFixture<TenSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
