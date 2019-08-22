import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPanelContainerComponent } from './client-panel-container.component';

describe('ClientPanelContainerComponent', () => {
  let component: ClientPanelContainerComponent;
  let fixture: ComponentFixture<ClientPanelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPanelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
