import { Injectable } from '@angular/core';
import { NewsFeed } from './news-feed.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  // newsFeedLists!: NewsFeed[];
  constructor(private httpClient : HttpClient) { }

  // getEmployeeList(){
  //   this.httpClient.get<any>('http://localhost:54814/api/getAllNews').subscribe(
  //     response => {
  //       console.log(response);
  //       this.newsFeedLists=response;
  //     }
  //   );
  // }

  getAll(): Observable<NewsFeed[]> {
    return this.httpClient.get<NewsFeed[]>('http://localhost:54814/api/getAllNews');
  }
}
