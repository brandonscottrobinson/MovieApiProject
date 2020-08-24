import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'movie', component: MovieListComponent },
  { path: '', redirectTo: '/movie', pathMatch: 'full' },
  { path: '**', component: MovieListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
