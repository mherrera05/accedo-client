import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private entries;

  constructor (private httpClient: HttpClient) {
    console.log("in home component");
  }

  ngOnInit(): void {
    this.httpClient.get('https://demo2697834.mockable.io/movies').subscribe(data => {
        this.entries = data.entries;
      console.log(this.entries);
    });
  }
}
