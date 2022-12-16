import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootFolderListComponent } from './root-folder-list.component';

describe('RootFolderListComponent', () => {
  let component: RootFolderListComponent;
  let fixture: ComponentFixture<RootFolderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootFolderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootFolderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
