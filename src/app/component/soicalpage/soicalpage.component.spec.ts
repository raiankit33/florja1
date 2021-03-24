import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoicalpageComponent } from './soicalpage.component';

describe('SoicalpageComponent', () => {
  let component: SoicalpageComponent;
  let fixture: ComponentFixture<SoicalpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoicalpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoicalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
