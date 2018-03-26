import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

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

    $(window).load(function() {
    /*var film_roll = new FilmRoll({
        configure_load: true,
        container: '#film_roll',
      });*/
  });
    //$(".col-md-12").fadeOut("fast");
  }

  setSelected(id) {
    for (var i = this.entries.length - 1; i >= 0; i--) {
      if (this.entries[i]["id"] == id) {
        var object = this.entries[i];
      }
    }

    this.httpClient.post('http://accedo.local/app_dev.php/histories', {
      id: object["id"],
      image: object["images"][0]["url"],
      content: object["contents"][0]["url"],
      title: object["title"]
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
