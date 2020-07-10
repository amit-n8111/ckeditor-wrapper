import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CkeditorLibModule } from 'ckeditor-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CkeditorLibModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
