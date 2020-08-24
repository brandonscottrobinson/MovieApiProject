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
      console.log(params.get('searchTerm'));
      let ourTitle = params.get('searchTerm');
      let ourRelease = params.get('releaseYear');
      this.movieServ.getData(ourTitle, ourRelease).subscribe((response) => {
        console.log(response);
        this.movies = response.results;
        //form.value.ourRelease
      });
    });
  };
}
