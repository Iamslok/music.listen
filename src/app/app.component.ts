import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query: any;
  response: any;
  loader = false
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.query = "Top Trendings songs of 2023"
    this.searchApi();
  }

  search(query: string) {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '0ee5330fb0mshb16f567cf6f7eb6p164de8jsnb0754f31a9c0',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    });
    const options = {
      headers: headers,
      params: {
        q: query,
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      }
    };
    return this.http.get('https://spotify23.p.rapidapi.com/search/', options);
  }

  searchApi(){
    this.loader = true
    this.search(this.query).subscribe(res=>{
      this.loader = false;
      this.response = res;
    })
  }
  
}
