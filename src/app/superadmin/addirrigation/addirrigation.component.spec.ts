import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddirrigationComponent } from './addirrigation.component';

describe('AddirrigationComponent', () => {
  let component: AddirrigationComponent;
  let fixture: ComponentFixture<AddirrigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddirrigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddirrigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
