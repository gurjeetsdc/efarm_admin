import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputManagementComponent } from './input-management.component';

describe('InputManagementComponent', () => {
  let component: InputManagementComponent;
  let fixture: ComponentFixture<InputManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
