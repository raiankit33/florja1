import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorjaComponent } from './florja.component';

describe('FlorjaComponent', () => {
  let component: FlorjaComponent;
  let fixture: ComponentFixture<FlorjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlorjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlorjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
