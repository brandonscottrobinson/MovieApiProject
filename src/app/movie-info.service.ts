import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieInfoService {
  baseUrlMovies: string = 'https://api.themoviedb.org/3/discover/movie';
  // baseUrlSearch: string = 'https://api.themoviedb.org/3/search/company?';
  baseUrlGenre: string = 'https://api.themoviedb.org/3/genre/movie/list';
  baseUrlImage: string = 'https://api.themoviedb.org/3/configuration';
  key: string = '594792bbaf56e905471ed7af3e967aca';
  favorites: any = [];

  constructor(private http: HttpClient) {}

  getData = (
    releaseYear: string,
    votingAverage: string,
    genre: string
  ): any => {
    return this.http.get(this.baseUrlMovies, {
      params: {
        api_key: this.key,
        primary_release_year: releaseYear,
        ['vote_average.gte']: votingAverage,
        with_genres: genre,
      },
    });
  };

  getDefaultData = (votingAverage: string): any => {
    return this.http.get(this.baseUrlMovies, {
      params: {
        api_key: this.key,
        ['vote_average.gte']: votingAverage,
      },
    });
  };

  getGenres = (): any => {
    return this.http.get(this.baseUrlGenre, {
      params: {
        api_key: this.key,
      },
    });
  };

  addMovieToFavorites = (movie) => {
    this.favorites.push(movie);
    console.log(this.favorites);
  };

  getFavorites = () => {
    return this.favorites;
  };

  deleteFavorite = (index: number) => {
    this.favorites.splice(index, 1);
  };
}

//criteria:
//genres
// --select dropdown
// --<select>
// <option = genre.id *ngFor>
// --make method in service to getGenres()
// --inject service the component that has the form
// --utilize the getGenres() on init
// --make a dropdown with the array
//primary-release-year
//vote_average

// https://api.themoviedb.org/3/discover/movie?api_key=594792bbaf56e905471ed7af3e967aca
