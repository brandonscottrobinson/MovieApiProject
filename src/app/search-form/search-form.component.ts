import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchMovie = (form: NgForm) => {
    console.log(form);

    this.router.navigate(['movie'], {
      queryParams: {
        searchTerm: form.value.ourTitle,
        releaseYear: form.value.ourRelease,
      },
    });
  };
}
