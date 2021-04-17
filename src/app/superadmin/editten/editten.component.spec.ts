import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittenComponent } from './editten.component';

describe('EdittenComponent', () => {
  let component: EdittenComponent;
  let fixture: ComponentFixture<EdittenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
