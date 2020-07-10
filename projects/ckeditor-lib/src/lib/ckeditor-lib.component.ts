import { Component, OnInit } from '@angular/core';

import * as Editor from './build/ckeditor';

@Component({
  selector: 'lib-ckeditor-lib',
  template: `
    <ckeditor [editor]="editor" [(ngModel)]="data"></ckeditor>
  `
})
export class CkeditorLibComponent implements OnInit {

  data = '<p>Amit</p>';
  editor = Editor.ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
