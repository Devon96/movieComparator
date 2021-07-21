import { Component, OnInit } from '@angular/core';
import {FilmekService} from '../filmek.service';
import {RouterModule, Router} from '@angular/router';
import {Movie, MovieDetails} from '../movie.model';

@Component({
  selector: 'app-filmek',
  templateUrl: './filmek.component.html',
  styleUrls: ['./filmek.component.css']
})
export class FilmekComponent implements OnInit {
  film1: Movie;
  film2: Movie;
  filmek: Movie[];
  search = '';
  pageNumber = 1;

  constructor(private filmekService: FilmekService, private router: Router) { }

  ngOnInit(): void {
    this.filmekService.getStartMovies().subscribe(data => {
      this.filmek = data.Search;
    });
    this.film1 = null;
    this.film2 = null;
  }

  kivalaszt(id: string) {

    if (this.film1 === null) {
      this.film1 = this.filmek.find( i => i.imdbID === id );
    } else if (id === this.film1.imdbID) {
      this.film1 = null;
    } else {
      this.router.navigate(['/hasonlit'], {queryParams: { m1: this.film1.imdbID,  m2: id}});
    }

  }

  searchMovies(): void {
    if (this.search.length > 0) {
      this.filmekService.getMovies(this.search, 1).subscribe(data => {
        this.filmek = data.Search;
      });
    } else if (this.search.length === 0) {
      this.filmekService.getStartMovies().subscribe(data => {
        this.filmek = data.Search;
      });
    }
  }
}
