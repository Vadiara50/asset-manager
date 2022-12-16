import { Component } from '@angular/core';


interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-drop-menu-header',
  templateUrl: './drop-menu-header.component.html',
  styleUrls: ['./drop-menu-header.component.scss']
})
export class DropMenuHeaderComponent {

  cities: City[];
  /*selectedCity: City;*/

  constructor() {
    this.cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
    ];
  }


}
