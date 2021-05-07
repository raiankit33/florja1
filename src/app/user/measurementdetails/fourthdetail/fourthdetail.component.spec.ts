import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthdetailComponent } from './fourthdetail.component';

describe('FourthdetailComponent', () => {
  let component: FourthdetailComponent;
  let fixture: ComponentFixture<FourthdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
