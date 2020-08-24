import { Component, OnInit, Input } from '@angular/core';
import { MovieInfoService } from '../movie-info.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  @Input() movieRef: any;
  favorites: any = [];
  isFavorite: boolean = false;

  constructor(private movieServ: MovieInfoService) {}

  ngOnInit(): void {}

  addMovieToFavorites = (movie) => {
    if (this.isFavorite === false) {
      this.isFavorite = true;
      this.movieServ.addMovieToFavorites(movie);
    }
  };
}
