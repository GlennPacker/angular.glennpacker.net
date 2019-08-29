import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryModuleComponent } from './angular-summary-module.component';

describe('AngularSummaryModuleComponent', () => {
  let component: AngularSummaryModuleComponent;
  let fixture: ComponentFixture<AngularSummaryModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
