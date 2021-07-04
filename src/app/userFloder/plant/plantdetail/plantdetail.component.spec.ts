import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantdetailComponent } from './plantdetail.component';

describe('PlantdetailComponent', () => {
  let component: PlantdetailComponent;
  let fixture: ComponentFixture<PlantdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
