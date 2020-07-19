import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private httpClient: HttpClient
  ) {

  }

  ngOnInit() {

  }

  getData() {
    const url = environment.serverURL + 'users';
    this.httpClient.get(url).subscribe(
      // this.httpClient.get(url, { params: { name_like: 'amit' } }).subscribe(
      // this.httpClient.get(url, { params: { _start: '0', _end: '2' } }).subscribe(
      // this.httpClient.post(url, { name: 'amit' }).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  addData() {
    const url = environment.serverURL + 'users';
    this.httpClient.post(url, {
      id: 'PS',
      name: 'Parth'
    }).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
