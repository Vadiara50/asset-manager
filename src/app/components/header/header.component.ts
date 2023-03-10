import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [{
      label: 'Folders',
      items: [
        {label: 'CAMPAIGNS', icon: 'pi pi-fw pi-file'},
        {label: 'Campaign 21', icon: 'pi pi-fw pi-file'},
        {label: 'Adv_May_22', icon: 'pi pi-fw pi-file'}
      ]
    },
      ];
  }
}



