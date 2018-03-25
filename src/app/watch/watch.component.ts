import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VgAPI } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: [
      './watch.component.css',
      '../../../node_modules/videogular2/fonts/videogular.css'
  ]
})

export class WatchComponent implements OnInit {
    private content;
    private api;

  constructor(private router: ActivatedRoute, private api: VgAPI) {
      this.router.params.subscribe(param => {
          this.content = param["url"];
      });
  }

  ngOnInit() {
  }

  onPlayerReady(api:VgAPI) {
    this.api = api;
    this.api.play();
  }
}
