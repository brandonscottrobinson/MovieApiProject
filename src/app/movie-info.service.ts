import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieInfoService {
  baseUrlMovies: string = 'https://api.themoviedb.org/3/discover/movie';
  baseUrlGenres: string = 'https://api.themoviedb.org/3/genre/movie/list';
  key: string = '594792bbaf56e905471ed7af3e967aca';

  constructor(private http: HttpClient) {}

  getData = (searchTerm: string, releaseYear: any): any => {
    return this.http.get(this.baseUrlMovies, {
      params: {
        api_key: this.key,
        q: searchTerm,
        primary_release_year: releaseYear,
        //with cast/people
        //with runtime
        //"lte"--need double quotes
      },
    });
  };
}
