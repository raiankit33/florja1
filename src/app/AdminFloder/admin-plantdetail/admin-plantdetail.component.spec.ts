import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlantdetailComponent } from './admin-plantdetail.component';

describe('AdminPlantdetailComponent', () => {
  let component: AdminPlantdetailComponent;
  let fixture: ComponentFixture<AdminPlantdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlantdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlantdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
