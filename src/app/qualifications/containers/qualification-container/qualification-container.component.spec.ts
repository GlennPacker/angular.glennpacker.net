import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationContainerComponent } from './qualification-container.component';

describe('AllQualificationContainerComponent', () => {
    let component: QualificationContainerComponent;
    let fixture: ComponentFixture<QualificationContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QualificationContainerComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QualificationContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
