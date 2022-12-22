import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropActionsPanelComponent } from './drag-drop-actions-panel.component';

describe('DragDropActionsPanelComponent', () => {
  let component: DragDropActionsPanelComponent;
  let fixture: ComponentFixture<DragDropActionsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropActionsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropActionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
