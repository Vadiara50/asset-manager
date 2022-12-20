import { Component } from '@angular/core';


interface Sort {
  name: string,
 }

@Component({
  selector: 'app-drop-menu-header',
  templateUrl: './drop-menu-header.component.html',
  styleUrls: ['./drop-menu-header.component.scss']
})
export class DropMenuHeaderComponent {


  sorts: Sort[];

  selectedSort = '';


  constructor() {
    this.sorts = [
      {name: 'Name Asc'},
      {name: 'Name Desc'},
      {name: 'Latest First'},
      {name: 'Oldest First'}
    ];
  }
}

