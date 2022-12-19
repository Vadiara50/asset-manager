import { Component } from '@angular/core';

interface Type {
  name: string,
}

@Component({
  selector: 'app-drop-menu-header-types',
  templateUrl: './drop-menu-header-types.component.html',
  styleUrls: ['./drop-menu-header-types.component.scss']
})
export class DropMenuHeaderTypesComponent {

  types: Type[];

  selectedType: string;

  constructor() {
    this.types = [
      {name: 'Documents'},
      {name: 'Images'}
    ];
  }
}
