import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenrequestComponent } from './senrequest.component';

describe('SenrequestComponent', () => {
  let component: SenrequestComponent;
  let fixture: ComponentFixture<SenrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
