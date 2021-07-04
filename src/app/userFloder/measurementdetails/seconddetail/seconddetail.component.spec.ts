import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconddetailComponent } from './seconddetail.component';

describe('SeconddetailComponent', () => {
  let component: SeconddetailComponent;
  let fixture: ComponentFixture<SeconddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeconddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
