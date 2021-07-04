import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationsComponent } from './irrigations.component';

describe('IrrigationsComponent', () => {
  let component: IrrigationsComponent;
  let fixture: ComponentFixture<IrrigationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrigationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
