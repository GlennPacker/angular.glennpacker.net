import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPanelItemComponent } from './client-panel-item.component';

describe('ClientPanelItemComponent', () => {
  let component: ClientPanelItemComponent;
  let fixture: ComponentFixture<ClientPanelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientPanelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
