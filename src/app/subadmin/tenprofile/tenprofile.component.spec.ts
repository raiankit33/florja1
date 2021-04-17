import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenprofileComponent } from './tenprofile.component';

describe('TenprofileComponent', () => {
  let component: TenprofileComponent;
  let fixture: ComponentFixture<TenprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
