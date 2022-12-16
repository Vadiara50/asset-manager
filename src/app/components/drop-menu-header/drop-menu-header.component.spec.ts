import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenuHeaderComponent } from './drop-menu-header.component';

describe('DropMenuHeaderComponent', () => {
  let component: DropMenuHeaderComponent;
  let fixture: ComponentFixture<DropMenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropMenuHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
