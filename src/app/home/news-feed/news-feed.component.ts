import { Component, OnInit } from '@angular/core';
import { NewsFeed } from '../shared/news-feed.model';
import { NewsFeedService } from '../shared/news-feed.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  newsFeedLists?: NewsFeed[];
  errorMessage: any;
  constructor(private newsFeedService: NewsFeedService, private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.retrieveNewsFeed();
  }
  getEmployeeList(){
    // this.httpClient.get<any>('http://localhost:54814/api/getAllNews').subscribe(
    //   response => {
    //     console.log(response);
    //     this.newsFeedLists=response;
    //   }
    // );
    this.httpClient.get<any>('http://localhost:54814/api/getAllNews').subscribe({
        next: data => {
            this.newsFeedLists = data;
            console.log(this.newsFeedLists);
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
  }
  retrieveNewsFeed(): void {
    this.newsFeedService.getAll()
      .subscribe({
        next: (data) => {
          this.newsFeedLists = data;
        },
        error: (e) => console.error(e)
      });
  }

}
