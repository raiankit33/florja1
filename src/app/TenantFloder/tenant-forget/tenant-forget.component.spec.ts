import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantForgetComponent } from './tenant-forget.component';

describe('TenantForgetComponent', () => {
  let component: TenantForgetComponent;
  let fixture: ComponentFixture<TenantForgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantForgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
