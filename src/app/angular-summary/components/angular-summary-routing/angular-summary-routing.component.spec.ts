import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryRoutingComponent } from './angular-summary-routing.component';

describe('AngularSummaryRoutingComponent', () => {
  let component: AngularSummaryRoutingComponent;
  let fixture: ComponentFixture<AngularSummaryRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
