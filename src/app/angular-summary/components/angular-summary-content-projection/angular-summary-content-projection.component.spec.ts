import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryContentProjectionComponent } from './angular-summary-content-projection.component';

describe('AngularSummaryContentProjectionComponent', () => {
  let component: AngularSummaryContentProjectionComponent;
  let fixture: ComponentFixture<AngularSummaryContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
