import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieInfoService } from '../movie-info.service';

@Component({
  selector: 'app-favs-card',
  templateUrl: './favs-card.component.html',
  styleUrls: ['./favs-card.component.css'],
})
export class FavsCardComponent implements OnInit {
  @Input() favsRef: any;
  @Output() showInfo = new EventEmitter<any>();

  constructor(private movieServ: MovieInfoService) {}

  ngOnInit(): void {}

  deleteFavorite = (favorite: any) => {
    this.movieServ.deleteFavorite(favorite);
  };

  toggleMovie = () => {
    this.showInfo.emit();
  };
}
