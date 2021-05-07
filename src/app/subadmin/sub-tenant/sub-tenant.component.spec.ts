import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTenantComponent } from './sub-tenant.component';

describe('SubTenantComponent', () => {
  let component: SubTenantComponent;
  let fixture: ComponentFixture<SubTenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
