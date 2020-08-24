import { MovieInfoService } from './../movie-info.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { getLocaleFirstDayOfWeek } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: any;

  constructor(
    private route: ActivatedRoute,
    private movieServ: MovieInfoService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies = () => {
    this.route.queryParamMap.subscribe((params) => {
      let ourRelease = params.get('releaseYear');
      let ourAverage = params.get('votingAverage');
      let ourGenre = params.get('genre');
      this.movieServ
        .getData(ourRelease, ourAverage, ourGenre)
        .subscribe((response) => {
          console.log(response);
          this.movies = response.results;
          //form.value.ourRelease
        });
    });
  };
}
