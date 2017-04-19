import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandManagementComponent } from '. /land-management.component';

describe('LandManagementComponent', () => {
  let component: LandManagementComponent;
  let fixture: ComponentFixture<LandManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
