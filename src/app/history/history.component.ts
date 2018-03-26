import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    private records;

  constructor(private httpClient: HttpClient) {
      this.httpClient.get("http://accedo.local/app_dev.php/api/histories").subscribe(data => {
          this.records = data;
      })
  }

  ngOnInit() {
  }
}
