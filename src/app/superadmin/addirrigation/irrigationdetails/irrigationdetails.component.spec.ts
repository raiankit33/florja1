import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationdetailsComponent } from './irrigationdetails.component';

describe('IrrigationdetailsComponent', () => {
  let component: IrrigationdetailsComponent;
  let fixture: ComponentFixture<IrrigationdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
