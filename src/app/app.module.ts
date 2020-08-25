import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavsListComponent } from './favs-list/favs-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FavsCardComponent } from './favs-card/favs-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    MovieListComponent,
    FavsListComponent,
    MovieCardComponent,
    FavsCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
