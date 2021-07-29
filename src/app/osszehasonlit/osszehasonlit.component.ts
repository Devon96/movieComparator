import {Component, OnInit} from '@angular/core';
import {FilmekService} from '../filmek.service';
import {MovieDetails} from '../movie.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-osszehasonlit',
  templateUrl: './osszehasonlit.component.html',
  styleUrls: ['./osszehasonlit.component.css']
})
export class OsszehasonlitComponent implements OnInit {
  film1: MovieDetails;
  film2: MovieDetails;


  constructor(private filmekService: FilmekService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filmekService.getMovie(params.m1).subscribe(data => {
        this.film1 = data;
      });
      this.filmekService.getMovie(params.m2).subscribe(data => {
        this.film2 = data;
      });
    });
  }
}
