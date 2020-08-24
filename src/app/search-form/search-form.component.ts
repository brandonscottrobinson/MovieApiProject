import { MovieInfoService } from './../movie-info.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  genres: any;
  constructor(private router: Router, private movieServ: MovieInfoService) {}

  ngOnInit(): void {
    this.getGenres();
  }

  searchMovie = (form: NgForm) => {
    console.log(form);

    this.router.navigate(['movie'], {
      queryParams: {
        releaseYear: form.value.releaseYear,
        votingAverage: form.value.votingAverage,
        genre: form.value.genre,
      },
    });
  };

  getGenres = () => {
    this.movieServ.getGenres().subscribe((response) => {
      console.log(response);
      this.genres = response.genres;
    });
  };
}
