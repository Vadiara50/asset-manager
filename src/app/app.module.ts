import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import { RootFolderListComponent } from './components/root-folder-list/root-folder-list.component';
import { FileListComponent } from './components/file-list/file-list.component';
import {DropdownModule} from 'primeng/dropdown';
import { DropMenuHeaderComponent } from './components/drop-menu-header/drop-menu-header.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RootFolderListComponent,
    FileListComponent,
    DropMenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
