import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movies } from '../models/movies';

const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  top_rated = '/movie/top_rated',
  popular = '/movie/popular',
  upcoming = '/movie/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv',
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private URL = 'http://api.themoviedb.org/3';
  private API_KEY = environment.api;
  constructor(private http: HttpClient) {}

  getLatestMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
      params: {
        API_KEY: this.API_KEY,
      },
    });
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        API_KEY: this.API_KEY,
      },
    });
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        API_KEY: this.API_KEY,
      },
    });
  }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params: {
        API_KEY: this.API_KEY,
      },
    });
  }
  getUpcoming(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.upcoming}`, {
      params: {
        API_KEY: this.API_KEY,
      },
    });
  }
  getOriginals(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
      params: {
        API_KEY: this.API_KEY,
      },
    });
  }

  getTrending(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
      params: {
        API_KEY: this.API_KEY,
      },
    });
  }
}
