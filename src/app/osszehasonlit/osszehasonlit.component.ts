import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FilmekService} from '../filmek.service';
import {Film} from '../film.model';

@Component({
  selector: 'app-osszehasonlit',
  templateUrl: './osszehasonlit.component.html',
  styleUrls: ['./osszehasonlit.component.css']
})
export class OsszehasonlitComponent implements OnInit {
  public film1: Film;
  public film2: Film;

  constructor(private filmekService: FilmekService) { }

  ngOnInit(): void {
    this.film1 = this.filmekService.film1;
    this.film2 = this.filmekService.film2;
    if ( this.film1 !== undefined){
      localStorage.setItem('film1', JSON.stringify(this.film1));
      localStorage.setItem('film2', JSON.stringify(this.film2));
    } else {
      this.film1 = JSON.parse(localStorage.getItem('film1'));
      this.film2 = JSON.parse(localStorage.getItem('film2'));
    }
  }
}
