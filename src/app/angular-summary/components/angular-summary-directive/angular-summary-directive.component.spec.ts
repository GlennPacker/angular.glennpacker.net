import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryDirectiveComponent } from './angular-summary-directive.component';

describe('AngularSummaryDirectiveComponent', () => {
  let component: AngularSummaryDirectiveComponent;
  let fixture: ComponentFixture<AngularSummaryDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
