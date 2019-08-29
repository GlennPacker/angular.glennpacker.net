import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryRxjsComponent } from './angular-summary-rxjs.component';

describe('AngularSummaryRxjsComponent', () => {
  let component: AngularSummaryRxjsComponent;
  let fixture: ComponentFixture<AngularSummaryRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
