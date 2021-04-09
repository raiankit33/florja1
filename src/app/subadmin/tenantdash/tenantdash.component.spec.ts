import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantdashComponent } from './tenantdash.component';

describe('TenantdashComponent', () => {
  let component: TenantdashComponent;
  let fixture: ComponentFixture<TenantdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
