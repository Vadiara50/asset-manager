import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenuHeaderTypesComponent } from './drop-menu-header-types.component';

describe('DropMenuHeaderTypesComponent', () => {
  let component: DropMenuHeaderTypesComponent;
  let fixture: ComponentFixture<DropMenuHeaderTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropMenuHeaderTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenuHeaderTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
