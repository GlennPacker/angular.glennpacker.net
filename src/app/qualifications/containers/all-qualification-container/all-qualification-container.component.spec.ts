import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQualificationContainerComponent } from './all-qualification-container.component';

describe('AllQualificationContainerComponent', () => {
  let component: AllQualificationContainerComponent;
  let fixture: ComponentFixture<AllQualificationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllQualificationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQualificationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
