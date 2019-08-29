import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryNgRxComponent } from './angular-summary-ng-rx.component';

describe('AngularSummaryNgRxComponent', () => {
  let component: AngularSummaryNgRxComponent;
  let fixture: ComponentFixture<AngularSummaryNgRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryNgRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryNgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
