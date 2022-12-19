import { Component } from '@angular/core';

interface View {
  name: string,
}

@Component({
  selector: 'app-drop-menu-header-view',
  templateUrl: './drop-menu-header-view.component.html',
  styleUrls: ['./drop-menu-header-view.component.scss']
})
export class DropMenuHeaderViewComponent {
  views: View[];

  selectedView: string;

  constructor() {
    this.views = [
      {name: 'List'},
      {name: 'Icons'}
    ];
  }
}
