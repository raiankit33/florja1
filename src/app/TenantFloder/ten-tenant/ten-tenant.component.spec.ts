import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenTenantComponent } from './ten-tenant.component';

describe('TenTenantComponent', () => {
  let component: TenTenantComponent;
  let fixture: ComponentFixture<TenTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
