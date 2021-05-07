import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirddetailComponent } from './thirddetail.component';

describe('ThirddetailComponent', () => {
  let component: ThirddetailComponent;
  let fixture: ComponentFixture<ThirddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
