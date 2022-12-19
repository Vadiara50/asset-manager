import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenuHeaderViewComponent } from './drop-menu-header-view.component';

describe('DropMenuHeaderViewComponent', () => {
  let component: DropMenuHeaderViewComponent;
  let fixture: ComponentFixture<DropMenuHeaderViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropMenuHeaderViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenuHeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
