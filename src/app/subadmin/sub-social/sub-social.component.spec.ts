import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSocialComponent } from './sub-social.component';

describe('SubSocialComponent', () => {
  let component: SubSocialComponent;
  let fixture: ComponentFixture<SubSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
