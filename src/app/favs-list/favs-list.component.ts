import { Component, OnInit, Input } from '@angular/core';
import { MovieInfoService } from '../movie-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favs-list',
  templateUrl: './favs-list.component.html',
  styleUrls: ['./favs-list.component.css'],
})
export class FavsListComponent implements OnInit {
  favorites: any = [];
  constructor(
    private movieServ: MovieInfoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  getFavorites = () => {
    this.favorites = this.movieServ.getFavorites();
  };
}
