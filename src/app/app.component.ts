import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  entries;

  constructor (private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.httpClient.get('https://demo2697834.mockable.io/movies').subscribe(data => {
        this.entries = data.entries;
      console.log(this.entries);
    });
  }


}
