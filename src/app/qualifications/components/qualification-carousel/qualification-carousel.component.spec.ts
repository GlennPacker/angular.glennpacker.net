import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationCarouselComponent } from './qualification-carousel.component';

describe('QualificationCarouselComponent', () => {
  let component: QualificationCarouselComponent;
  let fixture: ComponentFixture<QualificationCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QualificationCarouselComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
