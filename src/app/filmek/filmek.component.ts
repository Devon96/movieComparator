import { Component, OnInit } from '@angular/core';
import {FilmekService} from '../filmek.service';
import {RouterModule, Router} from '@angular/router';
import {Movie, MovieDetails} from '../movie.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-filmek',
  templateUrl: './filmek.component.html',
  styleUrls: ['./filmek.component.css']
})
export class FilmekComponent implements OnInit {
  film1: Movie;
  film2: Movie;
  filmek: Movie[];
  pageNumber = 1;
  form: FormGroup;

  constructor(private filmekService: FilmekService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filmekService.getStartMovies().subscribe(data => {
      this.filmek = data.Search;
    });
    this.film1 = null;
    this.film2 = null;

    this.form = this.fb.group({
      title: '',
      category: 'movie'
    });

    this.form.valueChanges.subscribe(data => this.getMovies(data));
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

  getMovies(data) {
    this.filmekService.getMovies(data.title, data.category, this.pageNumber).subscribe(movies => {
      this.filmek = movies.Search;
    });
  }
}

