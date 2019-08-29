import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSummaryComponentComponent } from './angular-summary-component.component';

describe('AngularSummaryComponentComponent', () => {
  let component: AngularSummaryComponentComponent;
  let fixture: ComponentFixture<AngularSummaryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSummaryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
