import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CkeditorLibComponent } from './ckeditor-lib.component';

@NgModule({
  declarations: [CkeditorLibComponent],
  imports: [
    FormsModule,
    CommonModule,
    CKEditorModule
  ],
  exports: [CkeditorLibComponent]
})
export class CkeditorLibModule { }
