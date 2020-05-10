import { Component, OnInit } from '@angular/core';
import {Film} from '../film.model';
import {FilmekService} from '../filmek.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-filmek',
  templateUrl: './filmek.component.html',
  styleUrls: ['./filmek.component.css']
})
export class FilmekComponent implements OnInit {
  film1: Film;
  film2: Film;
  filmek: Film[];
  keresesmezo: string;

  constructor(private filmekService: FilmekService, private router: Router) {

  }

  ngOnInit(): void {
    this.keresesmezo = '';
    this.filmekService.getFilmek().subscribe(data => {
      this.filmek = data;
    });
  }


  kivalaszt(id: number) {
    if (this.film1 === undefined) {
      for (const film of this.filmek) {
        if (film.id === id) {
          this.film1 = film;
        }
      }
    } else {
      for (const film of this.filmek) {
        if (film.id === id) {
          this.film2 = film;
          if (this.film1.id === this.film2.id) {
            this.film1 = undefined;
            this.film2 = undefined;
            return;
          }
          this.filmekService.film1 = this.film1;
          this.filmekService.film2 = this.film2;
          this.router.navigate(['/hasonlit']);
        }
      }
    }
  }

}
