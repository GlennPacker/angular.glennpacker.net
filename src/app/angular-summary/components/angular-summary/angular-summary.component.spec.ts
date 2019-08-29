import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryComponent } from './angular-summary.component';

describe('AngularSummaryComponent', () => {
  let component: AngularSummaryComponent;
  let fixture: ComponentFixture<AngularSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
