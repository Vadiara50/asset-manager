import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule} from 'primeng/calendar';
import { ButtonModule} from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { InputTextModule} from 'primeng/inputtext';
import { RootFolderListComponent } from './components/root-folder-list/root-folder-list.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { DropdownModule} from 'primeng/dropdown';
import { DropMenuHeaderComponent } from './components/drop-menu-header/drop-menu-header.component';
import { FormsModule} from "@angular/forms";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DropMenuHeaderViewComponent } from './components/drop-menu-header-view/drop-menu-header-view.component';
import { DropMenuHeaderTypesComponent } from './components/drop-menu-header-types/drop-menu-header-types.component';
import {  TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RootFolderListComponent,
    FileListComponent,
    DropMenuHeaderComponent,
    DropMenuHeaderViewComponent,
    DropMenuHeaderTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
