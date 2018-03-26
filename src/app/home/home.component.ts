import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
declare var $: any;
declare var FilmRoll: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  private entries;

  constructor (private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get('https://demo2697834.mockable.io/movies').subscribe(data => {
        this.entries = data['entries'];
    });

    $(window).load(() => {
    var film_roll = new FilmRoll({
        configure_load: true,
        container: '#film_roll',
      });
  });
  }

  setSelected(id) {
    for (var i = this.entries.length - 1; i >= 0; i--) {
      if (this.entries[i]["id"] == id) {
        var object = this.entries[i];
      }
    }

    const body = new HttpParams()
      .set('id', object["id"])
      .set('image', object["images"][0]["url"])
      .set('content', object["contents"][0]["url"])
      .set('title', object["title"])
    ;

    this.httpClient.post('http://accedo.local/app_dev.php/api/histories', body.toString(),
    {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
