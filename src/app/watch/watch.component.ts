import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
    private content;

  constructor(private router: ActivatedRoute) {
      this.content = this.router.params._value["url"];
  }

  ngOnInit() {

  }
}
