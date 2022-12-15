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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RootFolderListComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
